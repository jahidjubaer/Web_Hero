import useInputField from "../hooks/useInputField";

const HooksForm = () => {
  const [nameValue, setNameValue] = useInputField("");
  const [emailValue, setEmailValue] = useInputField("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nameValue, emailValue);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={setNameValue}
          type="text"
          placeholder="enter your name"
          name="name"
        />
        <br />
        <input
          onChange={setEmailValue}
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

export default HooksForm;
