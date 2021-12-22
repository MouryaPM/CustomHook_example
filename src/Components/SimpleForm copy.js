import { useRef, useState, useEffect } from "react";
const SimpleFormWithoutHook = () => {
  const usernameRef = useRef();
  const [username, setUsername] = useState("");
  const [nameVisited, setNameVisited] = useState(false);
  const [useremail, setuserEmail] = useState("");
  const [emailVisited, setEmailVisited] = useState(false);
  //const [formIsValid, setFormIsValid] = useState(false);

  //const [nameIsValid, setNameIsValid] = useState(false);

  //name
  const nameIsValid = username.trim() !== "";
  //email
  const emailIsValid = useremail.includes("@");
  let formIsValid = false;

  if (nameIsValid && emailIsValid) {
    formIsValid = true;
  }
  // useEffect(() => {
  //   if (nameIsValid && emailIsValid) {
  //     setFormIsValid(true);
  //   } else {
  //     setFormIsValid(false);
  //   }
  // }, [nameIsValid, emailIsValid]);

  //Name
  const nameChangeHandler = (event) => {
    setUsername(event.target.value);
    // if (event.target.value.trim() != "") {
    //   setNameIsValid(true);
    // }
  };

  const nameBlurHandler = () => {
    setNameVisited(true);
    // if (username.trim() === "") {
    //   setNameIsValid(false);
    // }
  };

  //Email
  const emailChangeHandler = (event) => {
    setuserEmail(event.target.value);
  };

  const emailBlurHandler = () => {
    setEmailVisited(true);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    setNameVisited(true);
    setEmailVisited(true);
    if (!nameIsValid && !emailIsValid) {
      console.log(nameIsValid);
      return;
    }

    console.log(username, useremail);
    //  setNameIsValid(true);
    setNameVisited(false);
    setUsername("");
    setEmailVisited(false);
    setuserEmail("");
    // const name = usernameRef.current.value;
    //  console.log(name);
  };
  return (
    <form onSubmit={submitHandler}>
      {/* Name */}
      <div
        className={`form-control ${
          !nameIsValid && nameVisited ? "invalid" : ""
        }`}
      >
        <label htmlFor="name">Username</label>
        <input
          type="text"
          id="name"
          //ref={usernameRef}
          onChange={nameChangeHandler}
          value={username}
          onBlur={nameBlurHandler}
        />
        {!nameIsValid && nameVisited && (
          <p className="error-text">Name Cannot be blank</p>
        )}
      </div>
      {/* Email */}
      <div
        className={`form-control ${
          !emailIsValid && emailVisited ? "invalid" : ""
        }`}
      >
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          id="email"
          value={useremail}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {!emailIsValid && emailVisited && (
          <p className="error-text">Format (joe@domain.com)</p>
        )}
      </div>

      <div className="form-actions">
        <button type="submit" disabled={!formIsValid}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default SimpleFormWithoutHook;
