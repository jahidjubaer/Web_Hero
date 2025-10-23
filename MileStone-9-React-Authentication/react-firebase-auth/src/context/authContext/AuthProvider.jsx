// context provider ;
import React from "react";
import { AuthContext } from "./AuthContext";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase.init";

const AuthProvider = ({ children }) => {
  // firebase create user ;
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   keep the function into authInfo ;
  const authInfo = {
    createUser,
  };
  return (
    <div>
      {/* now i can access authInfo form any where using "use" hook  */}
      <AuthContext value={authInfo}>{children}</AuthContext>
    </div>
  );
};

export default AuthProvider;
