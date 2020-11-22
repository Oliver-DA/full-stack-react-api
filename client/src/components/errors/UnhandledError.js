import React from 'react';
import { Link } from 'react-router-dom';

//Components
import Header from '../Header';

const UnhandledError  = () => {
    return (
      <>
        <Header />
        <div className = "bounds">
          <h1>Error</h1>
          <p>Sorry! We just encountered an unexpected error.</p>
          <Link className = "button  button-secondary" to = "/">Go back</Link>
        </div>
      </>
    );
}
 
export default UnhandledError ;