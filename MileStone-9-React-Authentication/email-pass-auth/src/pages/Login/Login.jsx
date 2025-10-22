import { signInWithEmailAndPassword } from "firebase/auth/cordova";
import React, { useState } from "react";
import { Link } from "react-router";
import { auth } from "../../firebase/firebase.init";
import { useRef } from "react";
import { sendPasswordResetEmail } from "firebase/auth";

const Login = () => {
  // loginError state ;
  const [loginError, setLoginError] = useState("");
  const emailRef = useRef();
  // handle sign in btn ;
  const handleSignIn = (event) => {
    event.preventDefault();
    const password = event.target.password.value;
    const email = event.target.email.value;

    // reset form
    event.target.reset();

    // reset login error
    setLoginError("");

    // sign in with firebase  ;
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        if (!result.user.emailVerified) {
          alert("verify your email first");
        }
      })
      .catch((error) => {
        console.log(error.message);
        setLoginError(error.message);
      });
  };
  // handleForgetPass
  const handleForgetPass = () => {
    const email = emailRef.current.value;
    console.log(email);

    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("a reset link send to your email ");
      })
      .catch(() => {});
  };
  return (
    <div className="card bg-base-100 w-full max-w-sm mx-auto shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={handleSignIn}>
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
              ref={emailRef}
            />
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
            />
            <div onClick={handleForgetPass}>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
          </fieldset>
          {loginError && <p className="text-red-500">{loginError}</p>}
        </form>
        <p>
          Are you new to my website ?{" "}
          <Link to="/register" className="text-green-500 underline">
            Register Now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
