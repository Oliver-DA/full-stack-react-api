import React from 'react';

const ValidationErrors = ({ errors }) => {

    return (
      <div>
        <h2 className = "validation--errors--label">Validation errors</h2>
        <div className = "validation-errors">
          <ul>{errors && errors.map( (err, index) => (
              <li
                key = {index}
              >* {err}</li>
          ))}</ul>
        </div>
      </div>
    );
}
 
export default ValidationErrors;