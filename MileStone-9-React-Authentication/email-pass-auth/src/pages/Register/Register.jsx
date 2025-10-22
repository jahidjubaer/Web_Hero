import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase/firebase.init";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router";

const Register = () => {
  // error and success state ;
  const [regSuccess, setRegSuccess] = useState(false);
  const [regError, setRegError] = useState("");

  // show pass state ;
  const [showPass, setShowPass] = useState(false);

  // regex validation
  let passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

  // handle reg
  const handleRegisterSubmit = (event) => {
    event.preventDefault();
    const password = event.target.password.value;
    const email = event.target.email.value;
    const name = event.target.name.value;
    const PhotoUrl = event.target.photoUrl.value;
    console.log(email, password, name, PhotoUrl);
    

    //validation
    if (!passRegex.test(password)) {
      setRegError(
        "password should have one lowercase,uppercase  letter  at least 8 characters long and only contains letters and digits"
      );
      return;
    }
    // allow checkbox
    const isChecked = event.target.checkbox.checked;
    console.log(isChecked);
    if (!isChecked) {
      setRegError("allow rules and condition ");
      return;
    }

    // reset regSuccess and regError
    setRegSuccess(false);
    setRegError("");
    // create user with email and pass ;
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setRegSuccess("Register Successfully");
        // empty the field after submit;
        event.target.reset();

        // update profile ;
        const userProfile = { displayName: name, photoURL: PhotoUrl };

        updateProfile(auth.currentUser, userProfile)
          .then(() => {})
          .catch(() => {});

        // email verification
        sendEmailVerification(result.user).then(() => {
          alert("verify your email address ..");
        });
      })
      .catch((error) => {
        console.log(error);
        setRegError(error.message);
      });
  };

  // handleShowPassBtn
  const handleShowPassBtn = (event) => {
    event.preventDefault();
    setShowPass(!showPass);
  };

  return (
    <div className="hero-content flex-col lg:flex-row-reverse">
      <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold">Register Now</h1>
      </div>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleRegisterSubmit}>
            <fieldset className="fieldset">
              <label className="label">Name</label>
              <input
                type="text"
                className="input"
                placeholder="Your Name"
                name="name"
              />
              <label className="label">Photo URL </label>
              <input
                type="text"
                className="input"
                placeholder="Your photo URL"
                name="photoUrl"
              />
              <label className="label">Email</label>
              <input
                type="email"
                className="input"
                placeholder="Email"
                name="email"
              />
              <label className="label">Password</label>

              <div>
                <input
                  type={showPass ? "text" : "password"}
                  className="input"
                  placeholder="Password"
                  name="password"
                />

                <button
                  onClick={handleShowPassBtn}
                  className="btn btn-square absolute right-10 bg-transparent border-none shadow-none"
                >
                  {showPass ? <FaEyeSlash /> : <FaEye></FaEye>}
                </button>
              </div>

              <label className="label">
                <input name="checkbox" type="checkbox" className="checkbox" />
                Allow our rules and conditions
              </label>
              <button className="btn btn-neutral mt-4">Register</button>
            </fieldset>
            {regSuccess && <p className="text-green-500">{regSuccess}</p>}
            {regError && <p className="text-red-500 ">{regError}</p>}
          </form>
          <p>
            Do you have account already ? Please{" "}
            <Link className="text-blue-500 underline" to="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
