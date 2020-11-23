import React from 'react';
import { Link } from 'react-router-dom';

//Components
import Header from '../Header';

const UnhandledError  = ({ history }) => {
    return (
      <>
        <Header />
        <div className = "bounds">
          <h1>Error</h1>
          <p>Sorry! We just encountered an unexpected error.</p>
          <button className = "button" onClick = {()=> history.goBack()}>Reload</button>
          <Link className = "button  button-secondary" to = "/" >Go back to the home page</Link>
        </div>
      </>
    );
}
 
export default UnhandledError ;