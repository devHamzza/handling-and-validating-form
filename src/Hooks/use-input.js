import React, { useState } from "react";

const useInput = (checkValidity) => {
  const [inputValue, setInputValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = checkValidity(inputValue);
  const hasError = !valueIsValid && isTouched;

  const onChangeHandler = (event) => {
    setInputValue(event.target.value);
  };

  const onBlurHandler = () => {
    setIsTouched(true);
  };

  const resetHandler = () => {
    setInputValue("");
    setIsTouched(false);
  };

  return {
    value: inputValue,
    IsValid: valueIsValid,
    hasError,
    onChangeHandler,
    onBlurHandler,
    resetHandler,
  };
};

export default useInput;
