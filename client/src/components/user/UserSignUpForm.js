import React from 'react';

const UserSignUpForm = ({ handleChange, handleSubmit, user, cancel}) => {

    return (

      <form onSubmit={handleSubmit}>
        <div>
          <input
            onChange={handleChange}
            id="firstName"
            name="firstName"
            type="text"
            className=""
            placeholder="First Name"
            value={user.firstName}
          />
        </div>
        <div>
          <input
            onChange={handleChange}
            id="lastName"
            name="lastName"
            type="text"
            className=""
            placeholder="Last Name"
            value={user.lastName}
          />
        </div>
        <div>
          <input
            onChange={handleChange}
            id="emailAddress"
            name="emailAddress"
            type="text"
            className=""
            placeholder="Email Address"
            value={user.emailAddress}
          />
        </div>
        <div>
          <input
            onChange={handleChange}
            id="password"
            name="password"
            type="password"
            className=""
            placeholder="Password"
            value={user.password}
          />
        </div>
        <div>
          <input
            onChange={handleChange}
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            className=""
            placeholder="Confirm Password"
            value={user.confirmPassword}
          />
        </div>
        <div className="grid-100 pad-bottom">
          <button className="button" type="submit">
            Sign Up
          </button>
          <button className="button button-secondary" onClick={cancel}>
            Cancel
          </button>
        </div>
      </form>

    );
}
 
export default UserSignUpForm;