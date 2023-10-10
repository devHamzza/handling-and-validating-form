import React, { useState } from "react";

const useInput = (checkValidty) => {
  const [inputValue, setInputValue] = useState("");
  const [isTouched, setisTouched] = useState(false);

  const valueIsValid = checkValidty(inputValue);
  const hasError = !valueIsValid && isTouched;

  const inputChangeHandler = (event) => {
    setInputValue(event.target.value);
  };

  const inputBlurHandler = () => {
    setisTouched(true);
  };

  const reset = () => {
    setInputValue("");
    setisTouched(false);
  };

  return {
    inputValue,
    valueIsValid,
    hasError,
    inputChangeHandler,
    inputBlurHandler,
    reset,
  }
};

export default useInput;
