import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../Context';
import axios from 'axios';

//Components  
import Header from '../Header';
import ValidationErrors from '../errors/ValidationErrors';
import UserSignUpForm from './UserSignUpForm';

const UserSignUp = ({ history }) => {

  //State
  const [user, setUser] = useState({
    firstName:'',
    lastName:'',
    emailAddress:"",
    password:"",
    confirmPassword:""
  })

  const [errors, setErrors] = useState(null);
  const [error, setError] = useState(null);

  //Context
  const { usersUrl } = useContext(Context);

  //handlers
  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post(usersUrl, user)
      .then(response => response.status === 201 ? history.push("/signin") : null)
      .catch(err => {

        if (!err.response || err.response.status === 500) {
          return history.push("/error");

        } else {

          if (err.response.data.errors) {
            setErrors(err.response.data.errors);

          } else {
            setError(err.response.data.message);
            setErrors(null);
          }
          
        }
      });
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
            { error && <p className = "error">{error}</p> }
            <div>
              <UserSignUpForm
              user = {user}
              handleSubmit = {handleSubmit}
              handleChange = {handleChange}
              cancel = {cancel} />
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