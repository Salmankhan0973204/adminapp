
import axios from "axios";
import useInput from "../../hooks/use-input";
import "../Auth/Auth.css"
import { Link, useHistory } from "react-router-dom";

export default function SignUp() {
    let history = useHistory();
  const isNotEmpty = (value) => value.trim() !== "";


  const {
    value: firstNameValue,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
  } = useInput(isNotEmpty);

  let formIsValid = false;

  if (
    firstNameIsValid 
  
  ) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    axios
      .post(`https://user-7b630-default-rtdb.firebaseio.com/Courses.json`, {
        firstNameValue,
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

  const firstNameClasses = firstNameHasError
    ? "form-control invalid"
    : "form-control";
 
  return (
    <div className="app">
       <div className="formInput">
      <form onSubmit={submitHandler}>
        <div className="Title">
          <h2>Add Courses</h2>
          <hr />
        </div>
        <div className="control-group">
          <div className={firstNameClasses}>
          
            <input
            placeholder='Add Course'
              type="text"
              id="name"
              value={firstNameValue}
              onChange={firstNameChangeHandler}
              onBlur={firstNameBlurHandler}
            />
            {firstNameHasError && (
              <p className="error-text">Please enter a  course Name.</p>
            )}
          </div>
        </div>
        <button disabled={!formIsValid}>Submit</button>
     
      
      </form>
    </div>
    </div>
    
  );
}

