import React, { useState } from "react";

const ControlledForm = () => {
  const [password, setPassword] = useState("");
  //   error massage for less then 6 char
  const [error, setError] = useState("");

  const handleActionSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target);
  };
  const handleOnchange = (e) => {
    console.log(password);
    setPassword(e.target.value);
    // real time show error for less than 6 character   
    if (password.length < 6) {
      setError("minimum 6 character needed");
    } else {
      setError("");
    }
  };
  return (
    <div>
      <form onSubmit={handleActionSubmit}>
        <input type="text" placeholder="enter your name" name="name" />
        <br />
        <input type="email" placeholder="your email" name="email" required />
        <br />
        <input
          defaultValue={password}
          onChange={handleOnchange}
          type="password"
          name="password"
          placeholder="password"
        />{" "}
        <br />
        <p>
          <small>{error}</small>
        </p>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ControlledForm;
