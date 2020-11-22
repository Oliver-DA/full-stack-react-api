import React, { useContext, useState } from 'react';
import axios from 'axios';
import { Context } from '../Context';
import { useHistory } from "react-router-dom";
import Cookies from 'js-cookie';

//Components
import Header from '../Header';
import ValidationErrors from '../errors/ValidationErrors';

const CreateCourse = () => {
  let history = useHistory()

  const { authUser } = useContext(Context);
  const userCredentials = Cookies.get("userCredentials");

  const [newCourse, setNewCourse] = useState({
    title:"",
    description:"",
    estimatedTime:"",
    materialsNeeded:"",
    userId:authUser.id
  })

  const [errors, setErrors] = useState(null);

  //Handlers
  const handleChange = e => {

    setNewCourse({
      ...newCourse,
      [e.target.name]: e.target.value
    })
    
  }

  const handleSubmit = async (e) => {

    const options = {
        headers: {
            Authorization:`Basic ${`${userCredentials}`}`
        }
    }

    e.preventDefault();
    await axios.post("http://localhost:5000/api/courses", newCourse, options)
      .then(() => history.push("/"))
      .catch(err => console.log("There was an error creating the user",err.response,setErrors(err.response.data.errors)))
    
  };

  const cancel = e => {
    e.preventDefault();
    history.push("/")
  }

  return (
    <div>
      <Header />
      <div className="bounds course--detail">
        <h1>Create Course</h1>
        <div>
          { errors && <ValidationErrors errors = {errors} /> }
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
                    value= {newCourse.title}
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
                    value = {newCourse.description}
                    placeholder="Course description..."
                  ></textarea>
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
                        value= {newCourse.estimatedTime}
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
                        value = {newCourse.materialsNeeded}
                      ></textarea>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="grid-100 pad-bottom">
              <button className="button" type="submit">
                Create Course
              </button>
              <button
              className="button button-secondary"
              onClick = {cancel}>
              Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
 
export default CreateCourse;