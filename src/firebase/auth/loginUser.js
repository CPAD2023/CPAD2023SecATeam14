import firebase_app from "../config";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";

const auth = getAuth(firebase_app);

export default async function loginUser(email, password) {
  let res = null,
    err = null;
  try {
    res = await signInWithEmailAndPassword(auth, email, password);
  } catch (e) {
    err = e;
  }

  return { res, err };
}
