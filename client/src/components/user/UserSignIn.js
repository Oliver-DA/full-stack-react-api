import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../Context';

//Components
import Header from '../Header';
import SignInForm from './SignInForm';

const UserSignIn = ({ history, location }) => {

  //State
  const [user, setUser] = useState({ emailAddress:"", password:"" });
  const [error, setError] = useState(null);
  const { emailAddress, password } = user;

  //Context
  const { signIn } = useContext(Context);

  //Handlers
  const handleSubmit = e => {
    e.preventDefault();

    const { from } = location.state || { from: { pathname: '/' } };
    
    signIn(emailAddress, password)
      .then(response => {
        if (response.data.user) {
          return history.push(from);
        } else {
          history.push("/error");
        }
      })
      .catch(err => setError(err.response.data.message));
  }

  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
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
            { error && <p className = "error">{error}</p> }
            <div>
              <SignInForm
                user = {user}
                handleChange = {handleChange}
                handleSubmit = {handleSubmit}
                cancel = {cancel}
              />
            </div>
            <p>&nbsp;</p>
            <p>
              Don't have a user account? <Link to = "/signup">Click here</Link>{" "}
              to sign up!
            </p>
          </div>
        </div>
      </div>
    );
}
 
export default UserSignIn;