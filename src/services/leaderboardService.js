import { collection, getDocs } from "firebase/firestore";
import db from "./firebase";

export async function getLeaderboard() {
  const snapshot = await getDocs(collection(db, "users"));
  const users = snapshot.docs.map(doc => ({
    name: doc.data().name,
    count: doc.data().scanned?.length || 0
  }));

  return users.sort((a, b) => b.count - a.count).slice(0, 10);
}
