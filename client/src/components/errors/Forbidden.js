import React from 'react';

//Components
import Header from '../Header';

const Forbiden = ({ history }) => {

    return (
      <>
        <Header />
        <div className="bounds">
          <h1>Forbidden</h1>
          <p>Oh oh! You can't access this page.</p>
          <button className = "button  button-secondary" onClick = {()=> history.go(-2)}>Go back</button>
        </div>
      </>
    );
}
 
export default Forbiden;