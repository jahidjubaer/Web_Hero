import React from "react";

const ActionForm = () => {
  const handleActionSubmit = (formData) => {
    console.log(formData.get("name"));
    console.log(formData.get("email"));
  };
  return (
    <div>
      <form action={handleActionSubmit}>
        <input type="text" placeholder="enter your name" name="name" />
        <br />
        <input type="email" placeholder="your email" name="email" />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ActionForm;
