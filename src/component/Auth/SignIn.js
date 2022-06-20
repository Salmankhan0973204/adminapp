

import useInput from "../../hooks/use-input";
import "./Auth.css"
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";

export default function SignUp() {
  const [logindata, setlogindata] = useState([])
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

  }

  const submitHandler = (event) => {
    event.preventDefault();
    
    fetch(`https://user-7b630-default-rtdb.firebaseio.com/UESR.json`)
    .then((response) => {
      return response.json();
      
     
    })
    .then((data) => {
console.log(data);
    
   const loginData = []

   for(const key in data ){
    const user = data[key].logindata;
    loginData.push(user)
  
   }
      console.log("kkk")
      setlogindata(logindata)
     
    });

   
}


console.log(logindata)


  const emailClasses = emailHasError ? "form-control invalid" : "form-control";
  const passwordClasses = passwordHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <div className="app">
       <div className="formInput">
      <form onSubmit={submitHandler}  >
        <div className="Title">
          <h2>SigIn </h2>
          <hr />
        </div>
     
        <div className={emailClasses}>
      
          <input
            placeholder='Email'
            type="text"
         
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
           
              value={passwordValue}
              onChange={passwordChangeHandler}
              onBlur={passwordBlurHandler}
            />
            {passwordHasError && (
              <p className="error-text">Please enter a password.</p>
            )}
          </div>
        
        </div>
        <button  type="submit">Submit</button>
        <div className="new_reg"> <Link to="/signUp" >New Registration</Link></div>
      
      </form>
    </div>
    </div>
    
  );
}

