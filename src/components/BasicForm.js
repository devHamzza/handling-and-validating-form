import React, { useEffect, useState } from "react";

const BasicForm = (props) => {
  const [firstName, setFirstName] = useState("");
  const [firstNameValid, setFirstNameValid] = useState(false);
  const [firstNameTouched, setFirstNameTouched] = useState(false);
  const [secondName, setSecondName] = useState("");
  const [secondNameValid, setSecondNameValid] = useState(false);
  const [secondNameTouched, setSecondNameTouched] = useState(false);
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailValid, setEnteredEmailValid] = useState(false);
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);
  const [formIsValid, setformIsValid] = useState(false);

  const nameInputHandler = (event) => {
    setFirstName(event.target.value);
    if (event.target.value.trim().length !== 0) {
      setFirstNameValid(true);
    } else {
      setFirstNameValid(false);
    }
  };

  const secNameInputHandler = (event) => {
    setSecondName(event.target.value);
    if (event.target.value.trim().length !== 0) {
      setSecondNameValid(true);
    } else {
      setSecondNameValid(false)
    }
  };

  const emailInputHandler = (event) => {
    const enteredEmaili = event.target.value;
    setEnteredEmail(enteredEmaili);
    if (
      enteredEmaili.trim().includes("@") &&
      enteredEmaili.trim().length !== 0
    ) {
      setEnteredEmailValid(true);
    } else {
      setEnteredEmailValid(false)
    }
  };

  const emailInputBlurHandler = (event) => {
    setEnteredEmailTouched(true);
  };

  const nameInputBlurHandler = (event) => {
    setFirstNameTouched(true);
  };

  const secNameInputBlurHandler = (event) => {
    setSecondNameTouched(true);
  };

  const formSubmithandler = (event) => {
    event.preventDefault();
    setEnteredEmailTouched(true);
    setFirstNameTouched(true);
    setSecondNameTouched(true);
    if (formIsValid) {
      console.log(firstName, secondName, enteredEmail);

      setEnteredEmail("");
      setFirstName("");
      setSecondName("");
      setEnteredEmailTouched(false);
      setFirstNameTouched(false);
      setSecondNameTouched(false);
      setEnteredEmailValid(false);
      setFirstNameValid(false);
      setSecondNameValid(false);
    }
  };

  useEffect(() => {
    setformIsValid(
      enteredEmailValid &&
        firstNameValid &&
        secondNameValid &&
        secondNameTouched &&
        firstNameTouched &&
        enteredEmailTouched
    );
  }, [
    enteredEmailValid,
    firstNameValid,
    secondNameValid,
    secondNameTouched,
    firstNameTouched,
    enteredEmailTouched,
  ]);

  return (
    <form onSubmit={formSubmithandler}>
      <div className="control-group">
        <div
          className={`form-control ${
            firstNameTouched && !firstNameValid ? "invalid" : ""
          }`}
        >
          <label htmlFor="name">First Name</label>
          <input
            placeholder={
              firstNameTouched && !firstNameValid
                ? "First Name Cannot be Empty"
                : ""
            }
            value={firstName}
            onChange={nameInputHandler}
            type="text"
            id="name"
            onBlur={nameInputBlurHandler}
          />
        </div>
        <div
          className={`form-control ${
            secondNameTouched && !secondNameValid ? "invalid" : ""
          }`}
        >
          <label htmlFor="name">Last Name</label>
          <input
            placeholder={
              secondNameTouched && !secondNameValid
                ? "Second Name Cannot be Empty"
                : ""
            }
            value={secondName}
            onChange={secNameInputHandler}
            type="text"
            id="name"
            onBlur={secNameInputBlurHandler}
          />
        </div>
      </div>
      <div
        className={`form-control ${
          enteredEmailTouched && !enteredEmailValid ? "invalid" : ""
        }`}
      >
        <label htmlFor="name">E-Mail Address</label>
        <input
          placeholder={
            enteredEmailTouched && !enteredEmailValid
              ? "Enter a Valid Email"
              : ""
          }
          value={enteredEmail}
          onChange={emailInputHandler}
          type="text"
          id="name"
          onBlur={emailInputBlurHandler}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
