
import axios from "axios";
import useInput from "../../hooks/use-input";
import "./Auth.css"
import { Link, useHistory } from "react-router-dom";

export default function SignUp() {
    let history = useHistory();
  const isNotEmpty = (value) => value.trim() !== "";
  const isEmail = (value) => value.includes("@");

  const {
    value: firstNameValue,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
  } = useInput(isNotEmpty);

  const {
    value: lastNameValue,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
  } = useInput(isNotEmpty);

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
  } = useInput(isEmail);

  const {
    value: passwordValue,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
  } = useInput(isNotEmpty);

  const {
    value: confirmPassordValue,
    isValid: confirmPasswordIsValid,
    hasError: confirmPasswordHasError,
    valueChangeHandler: confirmpasswordChangeHandler,
    inputBlurHandler: confirmpasswordBlurHandler,
  } = useInput(isNotEmpty);

  let formIsValid = false;

  if (
    firstNameIsValid &&
    lastNameIsValid &&
    emailIsValid &&
    passwordIsValid &&
    confirmPasswordIsValid
  ) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    axios
      .post(`https://user-60895-default-rtdb.firebaseio.com/UESR.json`, {
        firstNameValue,
        lastNameValue,
        emailValue,
        passwordValue,
        confirmPassordValue
      })
      .then(() => {
        history.push('/')
      });
    event.preventDefault();
    alert("Sign Up Successfully")
    if (!formIsValid) {
      return;
    }

    console.log("Submitted!");
    
    console.log(firstNameValue, lastNameValue, emailValue);
  };

  const firstNameClasses = firstNameHasError
    ? "form-control invalid"
    : "form-control";
  const lastNameClasses = lastNameHasError
    ? "form-control invalid"
    : "form-control";
  const emailClasses = emailHasError ? "form-control invalid" : "form-control";
  const passwordClasses = passwordHasError
    ? "form-control invalid"
    : "form-control";
  const confirmPasswordClasses = confirmPasswordHasError
    ? "form-control invalid"
    : "form-control";
  return (
    <div className="app">
       <div className="formInput">
      <form onSubmit={submitHandler}>
        <div className="Title">
          <h2>Sign Up</h2>
          <hr />
        </div>
        <div className="control-group">
          <div className={firstNameClasses}>
          
            <input
            placeholder='First Name'
              type="text"
              id="name"
              value={firstNameValue}
              onChange={firstNameChangeHandler}
              onBlur={firstNameBlurHandler}
            />
            {firstNameHasError && (
              <p className="error-text">Please enter a first name.</p>
            )}
          </div>
          <div className={lastNameClasses}>
        
            <input
              placeholder='Last Name'
              type="text"
              id="name"
              value={lastNameValue}
              onChange={lastNameChangeHandler}
              onBlur={lastNameBlurHandler}
            />
            {lastNameHasError && (
              <p className="error-text">Please enter a last name.</p>
            )}
          </div>
        </div>
        <div className={emailClasses}>
      
          <input
            placeholder='Email'
            type="text"
            id="name"
            value={emailValue}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
          />
          {emailHasError && (
            <p className="error-text">Please enter a valid email address.</p>
          )}
        </div>
        <div className="control-group">
          <div className={passwordClasses}>
         <input
            placeholder='Password'
              type="password"
              id="name"
              value={passwordValue}
              onChange={passwordChangeHandler}
              onBlur={passwordBlurHandler}
            />
            {passwordHasError && (
              <p className="error-text">Please enter a password.</p>
            )}
          </div>
          <div className={confirmPasswordClasses}>
            
            <input
              placeholder='confirm'
              type="password"
              id="name"
              value={confirmPassordValue}
              onChange={confirmpasswordChangeHandler}
              onBlur={confirmpasswordBlurHandler}
            />
            {confirmPasswordHasError && (
              <p className="error-text">Please enter a Confirm Password.</p>
            )}
          </div>
        </div>
        <button disabled={!formIsValid}>Submit</button>
        <div className="new_reg"> <Link to="/" >New Registration</Link></div>
      
      </form>
    </div>
    </div>
    
  );
}

