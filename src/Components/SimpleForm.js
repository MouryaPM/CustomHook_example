import { useRef, useState, useEffect } from "react";
import useInput from "./Hooks/useInput";
const SimpleForm = () => {
  const usernameRef = useRef();

  const [state1, setState] = useState();
  // enteredname ->value
  //value-> eneteredValue
  const {
    value: enteredName,
    hasError: nameHasError,
    fieldChangeHandler: nameChangeHandler,
    fieldBlurHandler: nameBlurHandler,
    isValid: usernameIsValid,
    resetField: nameReset,
  } = useInput((value) => value.trim() !== "");
  console.log("Name:::", enteredName);
  //Email
  const {
    value: enteredEmail,
    hasError: emailHasError,
    fieldChangeHandler: emailChangeHandler,
    fieldBlurHandler: emailBlurHandler,
    isValid: emailIsValid,
    resetField: emailReset,
  } = useInput((value) => value.includes("@"));
  console.log("Email:::", enteredEmail);

  let formIsValid = false;

  if (usernameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();
    if (!usernameIsValid && !emailIsValid) {
      console.log(usernameIsValid);
      return;
    }

    console.log(enteredName, enteredEmail);
    nameReset();
    emailReset();
  };
  return (
    <form onSubmit={submitHandler}>
      {/* Name */}
      <div className={`form-control ${nameHasError ? "invalid" : ""}`}>
        <label htmlFor="name">Username</label>
        <input
          type="text"
          id="name"
          //ref={usernameRef}
          onChange={nameChangeHandler}
          value={enteredName}
          onBlur={nameBlurHandler}
        />
        {nameHasError && <p className="error-text">Name Cannot be blank</p>}
      </div>
      {/* Email */}
      <div className={`form-control ${emailHasError ? "invalid" : ""}`}>
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          id="email"
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailHasError && <p className="error-text">Format (joe@domain.com)</p>}
      </div>

      <div className="form-actions">
        <button type="submit" disabled={!formIsValid}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default SimpleForm;
