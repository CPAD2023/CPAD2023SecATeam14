import firebase_app from "@/firebase/config";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const db = getFirestore(firebase_app);

export default async function addUser(users, id, data) {
  let result = null;
  let error = null;

  try {
    result = await setDoc(doc(db, users, id), data);
  } catch (e) {
    error = e;
  }

  return { result, error };
}
