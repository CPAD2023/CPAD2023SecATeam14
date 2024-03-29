import firebase_app from "@/firebase/config";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const db = getFirestore(firebase_app);

export default async function getUser(users, id) {
  let docRef = doc(db, users, id);

  let result = null;
  let error = null;

  try {
    result = (await getDoc(docRef)).data();
  } catch (e) {
    error = e;
  }

  return { result, error };
}
