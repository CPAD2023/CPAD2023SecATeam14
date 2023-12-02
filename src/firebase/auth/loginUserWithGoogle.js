import firebase_app from "../config";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

const auth = getAuth(firebase_app);
const provider = new GoogleAuthProvider();

export default async function loginUserWithGoogle() {
  let res = null,
    err = null;
  try {
    res = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(res);
    const token = credential.accessToken;
    const user = result.user;
  } catch (e) {
    err = e;
    const errorCode = err.code;
    const errorMessage = err.message;
    const email = err.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(err);
  }

  return { res, err };
}
