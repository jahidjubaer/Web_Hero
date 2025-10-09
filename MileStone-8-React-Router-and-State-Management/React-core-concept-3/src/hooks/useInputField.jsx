import { useState } from "react";

const useInputField = (defaultValue) => {
  const [inputValue, setInputValue] = useState(defaultValue);

  const handleOnchange = (e) => {
    setInputValue(e.target.value);
  };

  return [inputValue, handleOnchange];
};
export default useInputField;
