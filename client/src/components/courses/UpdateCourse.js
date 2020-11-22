import React, { useState, useEffect} from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import Cookie from 'js-cookie';

//Components
import Header from '../Header';
import ValidationErrors from '../errors/ValidationErrors';

const UpdateCourse = () => {

  const { id } = useParams();
  const history = useHistory()
  const userCredentials = Cookie.get("userCredentials")

  const [updatedCourse, setUpdatedCourse] = useState("");
  const [errors, setErrors] = useState("");

  useEffect(() => {

    const fetchCourse = async () => {

      await axios.get(`http://localhost:5000/api/courses/${id}`)
        .then(response => setUpdatedCourse(response.data))
        .catch(err => console.log("There was an error fetchin the data", err))
    }

    fetchCourse();

  },[id])

  //Handlers
  const handleChange = e => {
    setUpdatedCourse({
      ...updatedCourse,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const options = {
      headers: {
        Authorization:`Basic ${`${userCredentials}`}`
      }
    }
    await axios.put(`http://localhost:5000/api/courses/${id}`, updatedCourse, options)
      .then(response => console.log(response))
      .then(() => history.push(`/courses/${id}`))
      .catch(err => console.log("There was an error updating the course", setErrors(err.response.data.errors)))
  }

  const cancel = e => {
    e.preventDefault();
    history.push(`/courses/${id}`);
  }

  return (
    <div>

      <Header />

      <div className="bounds course--detail">
        <h1>Update Course</h1>
        { errors && <ValidationErrors errors = {errors} />}
        <div>
          <form onSubmit = {handleSubmit}>
            <div className="grid-66">
              <div className="course--header">
                <h4 className="course--label">Course</h4>
                <div>
                  <input
                    onChange = {handleChange}
                    id="title"
                    name="title"
                    type="text"
                    className="input-title course--title--input"
                    placeholder="Course title..."
                    value= {updatedCourse.title}
                  />
                </div>
                <p>By Joe Smith</p>
              </div>
              <div className="course--description">
                <div>
                  <textarea
                    onChange = {handleChange}
                    id="description"
                    name="description"
                    className=""
                    placeholder="Course description..."
                    value = {updatedCourse.description}
                  > 
                  </textarea>
                </div>
              </div>
            </div>
            <div className="grid-25 grid-right">
              <div className="course--stats">
                <ul className="course--stats--list">
                  <li className="course--stats--list--item">
                    <h4>Estimated Time</h4>
                    <div>
                      <input
                        onChange = {handleChange}
                        id="estimatedTime"
                        name="estimatedTime"
                        type="text"
                        className="course--time--input"
                        placeholder="Hours"
                        value= {updatedCourse.estimatedTime}
                      />
                    </div>
                  </li>
                  <li className="course--stats--list--item">
                    <h4>Materials Needed</h4>
                    <div>
                      <textarea
                        onChange = {handleChange}
                        id="materialsNeeded"
                        name="materialsNeeded"
                        className=""
                        placeholder="List materials..."
                        value = {updatedCourse.materialsNeeded}
                      >
                      </textarea>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="grid-100 pad-bottom">
              <button className="button" type="submit">
                Update Course
              </button>
              <button
                className="button button-secondary"
                onClick = {cancel}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
 
export default UpdateCourse;