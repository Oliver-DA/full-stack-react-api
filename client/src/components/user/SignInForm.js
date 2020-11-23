import React from 'react';

const SignInForm = ({ handleSubmit, handleChange, user, cancel}) => {
    
    return (
      <form onSubmit={handleSubmit}>
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
        <div className="grid-100 pad-bottom">
          <button className="button" type="submit">
            Sign In
          </button>
          <button className="button button-secondary" onClick={cancel}>
            Cancel
          </button>
        </div>
      </form>
    );
}
 
export default SignInForm;