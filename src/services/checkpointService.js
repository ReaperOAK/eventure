import { db } from './firebase';
import { collection, addDoc, updateDoc, doc, deleteDoc, getDocs } from 'firebase/firestore';

// CREATE: Add a new checkpoint
export async function addCheckpoint(data) {
  return await addDoc(collection(db, 'checkpoints'), data);
}

// READ: Get all checkpoints
export async function getCheckpoints() {
  const snapshot = await getDocs(collection(db, 'checkpoints'));
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

// UPDATE: Edit an existing checkpoint
export async function editCheckpoint(id, data) {
  return await updateDoc(doc(db, 'checkpoints', id), data);
}

// DELETE: Remove a checkpoint
export async function deleteCheckpoint(id) {
  return await deleteDoc(doc(db, 'checkpoints', id));
}

// READ: Get checkpoint by UUID (for QR scan)
export async function getCheckpointByUUID(uuid) {
  const q = query(collection(db, "checkpoints"), where("uuid", "==", uuid));
  const snapshot = await getDocs(q);
  if (snapshot.empty) return null;
  const docSnap = snapshot.docs[0];
  return { id: docSnap.id, ...docSnap.data() };
}