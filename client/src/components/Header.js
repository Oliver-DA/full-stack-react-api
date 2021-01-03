import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from './Context';

const Header = () => {

  const { authUser } = useContext (Context);

    return (
      <div className="header">
        <div className="bounds">
          <Link to = "/">
            <h1 className="header--logo">Courses</h1>
          </Link>

          <nav>

            {authUser ? (
              <>
                <span>Welcome, {authUser.firstName} {authUser.lastName}</span>
                <Link to="/signout">SignOut</Link>
              </>
            ) : (
              <>
                <Link className="signup" to="/signup">
                  Sign Up
                </Link>
                <Link className="signin" to="/signin">
                  Sign In
                </Link>
              </>
            )}
            
          </nav>
        </div>
      </div>
    );
}
 
export default Header;