import { useEffect, useState } from "react";
import initializeAuthentication from "../firebase/firebase.init";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
initializeAuthentication();
const useFirebase = () => {
  const [user, SetUser] = useState({});
  const auth = getAuth();
  const gProvider = new GoogleAuthProvider();

  const signInGoogle = () => {
    return signInWithPopup(auth, gProvider);
  };

  const registerUser = (name, email, pass) => {
    return createUserWithEmailAndPassword(auth, email, pass);
  };

  const login = (email, pass) => {
    return signInWithEmailAndPassword(auth, email, pass);
  };

  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const logout = () => {
    signOut(auth).then(() => {
      SetUser({});
    });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        SetUser(user);
      }
    });
  });

  return {
    auth,
    user,
    SetUser,
    registerUser,
    login,
    logout,
    signInGoogle,
    resetPassword,
  };
};

export default useFirebase;
