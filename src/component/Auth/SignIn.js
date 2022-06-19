
import axios from "axios";
import useInput from "../../hooks/use-input";
import "./Auth.css"
import { Link, useHistory } from "react-router-dom";

export default function SignUp() {
    let history = useHistory();
  const isNotEmpty = (value) => value.trim() !== "";
  const isEmail = (value) => value.includes("@");



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



  let formIsValid = false;

  if (
 
    emailIsValid &&
    passwordIsValid 
  
  ) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    axios
      .post(`https://user-60895-default-rtdb.firebaseio.com/UESR.json`, {
        
        emailValue,
        passwordValue,
       
      })
      .then(() => {
        history.push('/home')
      });
    event.preventDefault();
    alert("Sign Up Successfully")
    if (!formIsValid) {
      return;
    }
    console.log("Submitted!");
  
  };

 
  const emailClasses = emailHasError ? "form-control invalid" : "form-control";
  const passwordClasses = passwordHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <div className="app">
       <div className="formInput">
      <form onSubmit={submitHandler}>
        <div className="Title">
          <h2>Sign </h2>
          <hr />
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
        
        </div>
        <button disabled={!formIsValid}>Submit</button>
        <div className="new_reg"> <Link to="/signUp" >New Registration</Link></div>
      
      </form>
    </div>
    </div>
    
  );
}

