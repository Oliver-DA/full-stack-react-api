import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from './Context';

const ActionsBar = ({ id, course }) => {
  const { userId } = course;
  const { user } = useContext(Context);

    return (
      <div className="actions--bar">
        <div className="bounds">
          <div className="grid-100">

            {user.id == userId? (
              <span>
                <Link className="button" to={`/courses/${id}/update`}>
                  Update Course
                </Link>

                <Link className="button" to={`/courses/${id}/delete`}>
                  Delete Course
                </Link>

                <Link className="button button-secondary" to="/">
                  Return to List
                </Link>
              </span>
            ) : (
              <Link className="button button-secondary" to="/">
                Return to List
              </Link>
            )}

          </div>
        </div>
      </div>
    );
}
 
export default ActionsBar;