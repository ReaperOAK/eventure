import { collection, query, where, getDocs } from "firebase/firestore";
import db from "./firebase";

// Get checkpoint from UUID (QR token)
export async function getCheckpointByUUID(uuid) {
  const q = query(collection(db, "checkpoints"), where("uuid", "==", uuid));
  const snapshot = await getDocs(q);
  if (snapshot.empty) return null;
  const docSnap = snapshot.docs[0];
  return { id: docSnap.id, ...docSnap.data() };
}
