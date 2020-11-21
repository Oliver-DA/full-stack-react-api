import React, { useState, useContext } from 'react';
import { Context } from './Context';

//Components
import Header from './Header';

const UserSignIn = ({ history, location }) => {

  const [user, setUser] = useState({ emailAddress:"", password:"" });
  const { emailAddress, password } = user;
  const { signIn } = useContext(Context);

  //Handlers
  const handleSubmit = e => {
    e.preventDefault();
    const { from } = location.state || { from: { pathname: '/signup' } };
    
    signIn(emailAddress, password)
      .then(response => {
        console.log(response)
        if (response.data.user !== null) {
          return history.push(from)
        }
      })
      .catch(err => console.log(err))
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