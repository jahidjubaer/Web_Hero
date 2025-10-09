import React from "react";

const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const nameValue = e.target.name.value;
    const emailValue = e.target.email.value;

    console.log(nameValue, emailValue);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="enter your name" name="name" />
        <br />
        <input type="email" placeholder="your email" name="email" />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
