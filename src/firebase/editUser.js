import firebase_app from "@/firebase/config";

const db = getFirestore(firebase_app);
import { doc, getFirestore, updateDoc } from "firebase/firestore";

export default async function editUser(users, id, updatedData) {
  let result = null;
  let error = null;

  try {
    const docRef = doc(db, users, id);
    result = await updateDoc(docRef, updatedData);
  } catch (e) {
    error = e;
  }

  return { result, error };
}
