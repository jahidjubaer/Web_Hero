// context provider ;
import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase/firebase.init";

const AuthProvider = ({ children }) => {
  // user state ;
  const [user, setUser] = useState(null);
  // loader state ;
  const [loading, setLoading] = useState(true);

  // firebase create/register  user ;
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // firebase sign user ;
  const signinUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // firebase sing out user ;
  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  // observer currently login user
  // onAuthStateChanged(auth, (user) => {
  //   if (user) {
  //     console.log("if user", user);
  //   } else {
  //     console.log("else user ", user);
  //   }
  // });

  // we don't use that bz i will rerender every time . insist of that we use useEffect ;

  // using effect create observer so that it will not rerender every time ;

  useEffect(() => {
    // mount user
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // console.log("current user", currentUser);
      setUser(currentUser);

      // after getting the user loading stop
      setLoading(false);
    });

    // unmount user
    return () => unsubscribe();
  }, []);

  //   keep the function into authInfo ;
  const authInfo = {
    user,
    createUser,
    signinUser,
    signOutUser,
    loading,
  };
  return (
    <div>
      {/* now i can access authInfo form any where using "use" hook  */}
      <AuthContext value={authInfo}>{children}</AuthContext>
    </div>
  );
};

export default AuthProvider;
