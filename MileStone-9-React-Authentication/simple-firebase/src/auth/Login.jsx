import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase/firebase.init";

const provider = new GoogleAuthProvider();

const Login = () => {
  // user state
  const [user, setUser] = useState(null);
  // login with popup google
  const handleLoginBtn = () =>
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error);
      });

  //   handleSignout
  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        console.log(user);
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h2>Login form here</h2>

      {/* button  */}
      {user ? (
        <button onClick={handleSignout}>Signout</button>
      ) : (
        <button onClick={handleLoginBtn}>Login with google</button>
      )}

      {/* if there have any user data i mean if anyone login then ;  */}
      {user && (
        <div>
          <h1>{user.displayName}</h1>
          <h3>{user.email}</h3>
          <img src={user.photoURL} alt="" />
        </div>
      )}
    </div>
  );
};

export default Login;
