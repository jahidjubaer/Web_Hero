import React, { useRef } from "react";

const Uncontrolled = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(emailRef.current.value);
    console.log(passwordRef.current.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          ref={emailRef}
          type="text"
          placeholder="enter your name"
          name="name"
        />
        <br />
        <input
          ref={passwordRef}
          type="email"
          placeholder="your email"
          name="email"
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Uncontrolled;
