import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

//Components  
import Header from './Header';
import ValidationErrors from './errors/ValidationErrors';

const UserSignUp = ({ history }) => {

  const [user, setUser] = useState({
    firstName:'',
    lastName:'',
    emailAddress:"",
    password:"",
    confirmPassword:""
  })

  const [errors, setErrors] = useState(null);

  //handlers
  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post("http://localhost:5000/api/users", user)
      .then(response => response.status === 201 ? history.push("/signin") : null)
      .catch(err => {
        if (err.response.status === 500) {
          return history.push("/error")
        }
        setErrors(err.response.data.errors)
      })
  }

  const handleChange = e => {
    setUser({ 
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const cancel = e => {
    e.preventDefault();
    history.push("/");
  }

    return (
      <div>
        <Header />
        <div className="bounds">
          <div className="grid-33 centered signin">
            <h1>Sign Up</h1>
            { errors && <ValidationErrors errors = {errors} /> }
            <div>
              <form onSubmit = {handleSubmit}>
                <div>
                  <input
                    onChange = {handleChange}
                    id="firstName"
                    name="firstName"
                    type="text"
                    className=""
                    placeholder="First Name"
                    value= {user.firstName}
                  />
                </div>
                <div>
                  <input
                    onChange = {handleChange}
                    id="lastName"
                    name="lastName"
                    type="text"
                    className=""
                    placeholder="Last Name"
                    value= {user.lastName}
                  />
                </div>
                <div>
                  <input
                    onChange = {handleChange}
                    id="emailAddress"
                    name="emailAddress"
                    type="text"
                    className=""
                    placeholder="Email Address"
                    value= {user.emailAddress}
                  />
                </div>
                <div>
                  <input
                    onChange = {handleChange}
                    id="password"
                    name="password"
                    type="password"
                    className=""
                    placeholder="Password"
                    value= {user.password}
                  />
                </div>
                <div>
                  <input
                    onChange = {handleChange}
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    className=""
                    placeholder="Confirm Password"
                    value= {user.confirmPassword}
                  />
                </div>
                <div className="grid-100 pad-bottom">
                  <button className="button" type="submit">
                    Sign Up
                  </button>
                  <button
                    className="button button-secondary"
                    onClick = {cancel}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
            <p>&nbsp;</p>
            <p>
              Already have a user account? <Link to = "/signin">Click here</Link>{" "}
              to sign in!
            </p>
          </div>
        </div>
      </div>
    );
}
 
export default UserSignUp;