import React from 'react';
import { Link } from 'react-router-dom'

const ActionsBar = ({ id }) => {
    return (
      <div className = "actions--bar">
        <div className = "bounds">

          <div className = "grid-100">

            <span>
              <Link className = "button" to = { `/courses/${id}/update` }>
                Update Course
              </Link>

              <Link className = "button" to = { `/courses/${id}/delete` }>
                Delete Course
              </Link>
            </span>
            <Link className = "button button-secondary" to = "/">
              Return to List
            </Link>

          </div>

        </div>
      </div>
    );
}
 
export default ActionsBar;