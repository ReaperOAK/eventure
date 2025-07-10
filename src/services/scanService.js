import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { getUser, markCheckpointScanned } from "./userService";
import { getCheckpointByUUID } from "./checkpointService";
import db from "./firebase";

// Distance helper
function getDistance(lat1, lon1, lat2, lon2) {
  const R = 6371e3;
  const toRad = x => (x * Math.PI) / 180;
  const φ1 = toRad(lat1), φ2 = toRad(lat2);
  const Δφ = toRad(lat2 - lat1), Δλ = toRad(lon2 - lon1);
  const a = Math.sin(Δφ / 2) ** 2 +
            Math.cos(φ1) * Math.cos(φ2) *
            Math.sin(Δλ / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

export async function validateScan(token, userID, userLat, userLong) {
  const checkpoint = await getCheckpointByUUID(token);
  if (!checkpoint) return { success: false, error: "Invalid QR" };

  const now = new Date();
  const start = checkpoint.startTime.toDate();
  const end = checkpoint.endTime.toDate();

  if (now < start || now > end)
    return { success: false, error: "Outside valid time window" };

  const distance = getDistance(userLat, userLong, checkpoint.location.lat, checkpoint.location.long);
  if (distance > 100)
    return { success: false, error: "Too far from checkpoint" };

  const user = await getUser(userID);
  if (!user) return { success: false, error: "User not found" };
  if (user.scanned.includes(checkpoint.id))
    return { success: false, error: "Already scanned" };

  await markCheckpointScanned(userID, checkpoint.id);
  await addDoc(collection(db, "scans"), {
    userID,
    checkpointID: checkpoint.id,
    timestamp: serverTimestamp()
  });

  return { success: true, checkpointName: checkpoint.name };
}
