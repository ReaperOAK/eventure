import { doc, getDoc, setDoc, updateDoc, arrayUnion } from "firebase/firestore";
import db from "./firebase";

// Create new user
export async function createUser(userId, name) {
  await setDoc(doc(db, "users", userId), {
    name,
    scanned: []
  });
}

// Get user document
export async function getUser(userId) {
  const userRef = doc(db, "users", userId);
  const userSnap = await getDoc(userRef);
  return userSnap.exists() ? userSnap.data() : null;
}

// Update scanned list
export async function markCheckpointScanned(userId, checkpointId) {
  await updateDoc(doc(db, "users", userId), {
    scanned: arrayUnion(checkpointId)
  });
}
