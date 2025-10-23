import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../context/authContext/AuthContext";

const Register = () => {
  // get the auth inform from authContext ;
  //   destructure the function ;
  const { createUser } = use(AuthContext);

  // handleRegister
  const handleRegister = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(name, email, password);

    // call the function which get from auth context ;  ;
    createUser(email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="card mx-auto bg-base-100 w-full mt-10 max-w-sm shrink-0 rounded-lg shadow-md border border-transparent hover:p-3 transition-all duration-500 animate-fadeIn hover:border-green-500 hover:shadow-green-300 focus-within:border-green-600 focus-within:shadow-green-400 hover:text-green-600">
      <div className="card-body">
        <h1 className="text-3xl font-bold">Login now!</h1>
        <form onSubmit={handleRegister}>
          <fieldset className="fieldset">
            {/* name */}
            <label className="label">Name</label>
            <input
              type="name"
              className="input"
              placeholder="Name"
              name="name"
            />
            {/* email */}
            <label className="label">Email</label>
            <input
              type="email"
              className="input"
              placeholder="Email"
              name="email"
            />
            {/* password */}
            <label className="label">Password</label>
            <input
              type="password"
              className="input"
              placeholder="Password"
              name="password"
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="relative overflow-hidden btn btn-neutral mt-4 group">
              <span className="absolute inset-0 bg-green-500 scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></span>
              <span className="relative text-white group-hover:text-white transition-colors duration-300">
                Register
              </span>
            </button>
          </fieldset>
        </form>
        <p>
          Do you already have an account ?
          <Link
            to="/login"
            className="relative text-green-500 font-medium  transition-all duration-300 hover:text-white hover:font-semibold before:absolute before:-bottom-1 before:left-0 before:h-[2px] before:w-0 before:bg-green-600 before:transition-all before:duration-300 hover:before:w-full animate-fadeIn"
          >
            Login Now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
