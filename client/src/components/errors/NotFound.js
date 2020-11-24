import React from 'react';
import { useHistory } from 'react-router-dom';

//Components
import Header from '../Header';

const NotFound = ({ moves }) => {

    const history = useHistory()

    return (
      <>
        <Header />
        <div className="bounds">
          <h1>Not Found</h1>
          <p>Sorry! We couldn't find the page you're looking for.</p>
          {/* history.go() is a function from the history instance
          which takes a number as argument and will take you 
          back to the moves argument or 2 routes by default */}
          <button className = "button  button-secondary" onClick = {()=> history.go(moves || -2)}>Go back</button>
        </div>
 
      </>
    );
}
 
export default NotFound;