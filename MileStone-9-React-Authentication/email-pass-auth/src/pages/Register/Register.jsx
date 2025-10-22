import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase/firebase.init";
import { FaEye, FaEyeSlash } from "react-icons/fa";

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

    //validation
    if (!passRegex.test(password)) {
      setRegError(
        "password should have one lowercase,uppercase  letter  at least 8 characters long and only contains letters and digits"
      );
      return;
    }

    // empty the field after submit;
    event.target.reset();
    // reset regSuccess and regError
    setRegSuccess(false);
    setRegError("");
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setRegSuccess("Register Successfully");
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
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleRegisterSubmit}>
              <fieldset className="fieldset">
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
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4">Register</button>
              </fieldset>
              {regSuccess && <p className="text-green-500">{regSuccess}</p>}
              {regError && <p className="text-red-500 ">{regError}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
