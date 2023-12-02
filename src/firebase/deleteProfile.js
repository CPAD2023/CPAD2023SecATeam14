import firebase_app from "@/firebase/config";
import { doc, deleteDoc, getFirestore } from "firebase/firestore";
import { deleteUser, getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(firebase_app);
const db = getFirestore(firebase_app);

export default async function deleteProfile(email, password, collection) {
  let docResult = null;
  let userResult = null;
  let error = null;

  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    const currentUser = res.user;
    try {
      await deleteDoc(doc(db, collection, currentUser.uid));
      try {
        await deleteUser(currentUser);
      } catch (e) {
        error = e;
      }
    } catch (e) {
      error = e;
    }
  } catch (e) {
    error = e;
  }

  return { docResult, userResult, error };
}
