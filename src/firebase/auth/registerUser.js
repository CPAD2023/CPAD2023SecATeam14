import firebase_app from "../config";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

const auth = getAuth(firebase_app);

export default async function registerUser(email, password) {
  let res = null,
    err = null;
  try {
    res = await createUserWithEmailAndPassword(auth, email, password);
  } catch (e) {
    err = e;
  }

  return { res, err };
}
