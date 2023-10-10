import React, { useState } from "react";
import useInput from "../Hooks/use-input";

const SimpleInput = () => {
  const {
    value: nameInput,
    IsValid: nameIsValid,
    hasError: nameInputIsInvalid,
    onChangeHandler: onNameInputChange,
    onBlurHandler: onNameInputBlur,
    resetHandler: nameReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: emailInput,
    IsValid: emailIsValid,
    hasError: emailInputIsInvalid,
    onChangeHandler: onEmailInputChange,
    onBlurHandler: onEmailInputBlur,
    resetHandler: emailReset,
  } = useInput((value) => value.includes("@"));

  let formIsValid = false;

  if (emailIsValid && nameIsValid) {
    formIsValid = true;
  }

  const formSubmission = (event) => {
    event.preventDefault();
    console.log(nameInput, emailInput);

    nameReset();
    emailReset();
  };

  const nameClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";
  const emailClasses = emailInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmission}>
      <div className={nameClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={onNameInputChange}
          value={nameInput}
          onBlur={onNameInputBlur}
          placeholder={nameInputIsInvalid ? "Name can not be empty" : ""}
        />
      </div>
      <div className={emailClasses}>
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          onChange={onEmailInputChange}
          value={emailInput}
          onBlur={onEmailInputBlur}
        />
        {emailInputIsInvalid && (
          <p className="error-text">Enter a Valid Email Address</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

// Old Code

/* import React, { useState } from "react";

const SimpleInput = (props) => {
  const [nameInput, setnameInput] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const nameIsValid = nameInput.trim() !== "";
  const nameInputIsInvalid = !nameIsValid && isTouched;

  const [emailInput, setEmailInput] = useState("");
  const [isEmailTouched, setIsEmailTouched] = useState(false);

  const emailIsValid = emailInput.includes("@");
  const emailInputIsInvalid = !emailIsValid && isEmailTouched;

  let formIsValid = false;

  if (emailIsValid && emailInput) {
    formIsValid = true;
  }

  const onChangeHandler = (event) => {
    setnameInput(event.target.value);
  };

  const onEmailChangeHandler = (event) => {
    setEmailInput(event.target.value);
  };

  const onBlurHandler = (event) => {
    setIsTouched(true);
  };

  const onEmailBlurHandler = (event) => {
    setIsEmailTouched(true);
  };

  const formSubmission = (event) => {
    event.preventDefault();
    setIsEmailTouched(true);
    setIsTouched(true);

    console.log(nameInput, emailInput);

    setnameInput("");
    setEmailInput("");
    setIsTouched(false);
    setIsEmailTouched(false);
  };

  const nameClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";
  const emailClasses = emailInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmission}>
      <div className={nameClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={onChangeHandler}
          value={nameInput}
          onBlur={onBlurHandler}
        />
      </div>
      <div className={emailClasses}>
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          onChange={onEmailChangeHandler}
          value={emailInput}
          onBlur={onEmailBlurHandler}
        />
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit
        </button>
      </div>
    </form>
  );
};

export default SimpleInput; */
