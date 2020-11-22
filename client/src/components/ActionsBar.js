import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Context } from './Context';
import axios from 'axios';
import Cookies from 'js-cookie';

const ActionsBar = ({ id, course }) => {
  
  const history = useHistory()
  const { userId } = course;
  const { authUser } = useContext(Context);
  const userCredentials = Cookies.get("userCredentials");

  const handleDelete = async () => {
    const options = {
      headers: {
        Authorization:`Basic ${`${userCredentials}`}`
      }
    }

    await axios.delete(`http://localhost:5000/api/courses/${id}`, options)
      .then(response => console.log(response))
      .catch(err => console.log("There was an error deleting the course",err.response))

    history.push("/")
  }

    return (
      <div className="actions--bar">
        <div className="bounds">
          <div className="grid-100">

            {authUser.id === userId && authUser? (
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