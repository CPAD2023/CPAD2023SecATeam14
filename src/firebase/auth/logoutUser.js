import firebase_app from "../config";
import { getAuth, signOut } from "firebase/auth";

const auth = getAuth(firebase_app);

export default async function logoutUser() {
  let res = null,
    err = null;
  try {
    res = await signOut(auth);
  } catch (e) {
    err = e;
  }

  return { res, err };
}
