import React from 'react';

const CourseDisplay = ({ title, description, estimatedTime, materialsNeeded }) => {

    return (

      <div className = "bounds course--detail">
        <div className = "grid-66">

          <div className = "course--header">
            <h4 className = "course--label">Course</h4>
            <h3 className = "course--title">{ title }</h3>
            <p>By J. Smith </p>
          </div>

          <div className = "course--description">
            <p>{ description }</p>
          </div>
        </div>

        <div className = "grid-25 grid-right">
            <div className = "course--stats">

              <ul className = "course--stats--list">
                <li className = "course--stats--list--item">
                  <h4>Estimated Time</h4>
                  <h3>{ estimatedTime ? estimatedTime : "On hold" }</h3>
                </li>

                <li className = "course--stats--list--item">
                  <h4>Materials Needed</h4>
                  <ul>

                  { materialsNeeded
                  ? materialsNeeded.split("*").slice(1,).map( (material, index) => <li key = {index}>{material}</li>)
                  : "On Hold" }

                  </ul>
                </li>
              </ul>

            </div>
          </div>
      </div>

    );
}
 
export default CourseDisplay;