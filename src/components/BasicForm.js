import React from "react";
import useInput from "../Hooks/useInput";

const BasicForm = (props) => {
  let formIsValid = false;

  const {
    inputValue: nameValue,
    valueIsValid: nameValueIsValid,
    hasError: nameInputIsInvalid,
    inputBlurHandler: nameInputBlur,
    inputChangeHandler: nameInputChange,
    reset: nameInputReset,
  } = useInput((value) => value.trim() !== "");


  const {
    inputValue: emailValue,
    valueIsValid: emailValueIsValid,
    hasError: emailInputIsInvalid,
    inputBlurHandler: emailInputBlur,
    inputChangeHandler: emailInputChange,
    reset: emailInputReset,
  } = useInput((value) => value.includes("@"));

  const {
    inputValue: passwordValue,
    valueIsValid: passwordValueIsValid,
    hasError: passwordInputIsInvalid,
    inputBlurHandler: passwordInputBlur,
    inputChangeHandler: passwordInputChange,
    reset: passwordInputReset,
  } = useInput((value) => value.length >= 8);

  if (nameValueIsValid && emailValueIsValid && passwordValueIsValid) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();
    props.getFormData({nameValue, emailValue, passwordValue});

    nameInputReset();
    emailInputReset();
    passwordInputReset();
  };

  return (
    <form
      onSubmit={submitHandler}
      className="bg-white drop-shadow-lg rounded px-10 pt-10 pb-10 mb-4"
    >
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="username"
        >
          Username
        </label>
        <input
          value={nameValue}
          onChange={nameInputChange}
          onBlur={nameInputBlur}
          className={`shadow appearance-none border rounded w-full py-2.5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            nameInputIsInvalid ? "border-red-500 placeholder:text-red-300" : ""
          }`}
          id="username"
          type="text"
          placeholder={
            nameInputIsInvalid ? "Username cannot be empty" : "Username"
          }
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="email"
        >
          Email
        </label>
        <input
          value={emailValue}
          onChange={emailInputChange}
          onBlur={emailInputBlur}
          className={`shadow appearance-none border rounded w-full py-2.5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3 ${
            emailInputIsInvalid ? "border-red-500" : ""
          }`}
          id="email"
          type="text"
          placeholder="Email@email.com"
        />
        {emailInputIsInvalid && (
          <p className="text-red-500 text-xs italic">Enter a Valid Password</p>
        )}
      </div>
      <div className="mb-6">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="password"
        >
          Password
        </label>
        <input
          onChange={passwordInputChange}
          value={passwordValue}
          onBlur={passwordInputBlur}
          className={`shadow appearance-none border ${
            passwordInputIsInvalid ? "border-red-500" : ""
          } rounded w-full py-2.5 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password`}
          type="password"
          placeholder="******************"
        />
        {passwordInputIsInvalid && (
          <p className="text-red-500 text-xs italic">
            Password Must be 8 chracters long.
          </p>
        )}
      </div>
      <div className="flex items-center justify-end">
        <button
        disabled={!formIsValid}
          className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default BasicForm;
