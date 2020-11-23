import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Context } from './Context';
import axios from 'axios';

const ActionsBar = ({ id, course }) => {
  
  const history = useHistory();
  const { userId } = course;

  //Context
  const {
    authUser,
    authHeader,
    coursesUrl
  } = useContext(Context);

  //Handlers
  const handleDelete = async () => {
    await axios.delete(coursesUrl + id, authHeader)
      .then(() => history.push("/"))
      .catch(err => console.log("There was an error deleting the course",err.response));
  }

  return (
    <div className="actions--bar">
      <div className="bounds">
        <div className="grid-100">

          { authUser && authUser.id === userId ? (
            <span>
              <Link className="button" to={`/courses/${id}/update`}>
                Update Course
              </Link>

              <button className = "button" onClick = {handleDelete}>Delete Course</button>

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