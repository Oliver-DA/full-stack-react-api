import React, { useState } from 'react';
import axios from 'axios';

//Components
import Header from './Header';

const UserSignIn = ({ history }) => {

  const [user, setUser] = useState({ emailAddress:"", password:"" });

  //Handlers
  const handleSubmit =e => {
    e.preventDefault();
    // axios.get("http://localhost:5000/users", user)
    //   .then (response => console.log(response))
    //   .catch(err => console.log("There was an error finding the user", err))
    alert("Looking for user")
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
            <h1>Sign In</h1>
            <div>
              <form onSubmit = {handleSubmit}>
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
                <div className="grid-100 pad-bottom">
                  <button className="button" type="submit">
                    Sign In
                  </button>
                  <button
                    className="button button-secondary"
                    onClick= {cancel}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
            <p>&nbsp;</p>
            <p>
              Don't have a user account? <a href="sign-up.html">Click here</a>{" "}
              to sign up!
            </p>
          </div>
        </div>
      </div>
    );
}
 
export default UserSignIn;