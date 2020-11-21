import React, { useState }from 'react';
import axios from 'axios';

//Components
import Header from '../Header';

const CreateCourse = ({ history }) => {

  const [newCourse, setNewCourse] = useState({
    title:"",
    description:"",
    estimatedTime:"",
    materialsNeeded:""
  })

  //Handlers
  const handleChange = e => {

    setNewCourse({
      ...newCourse,
      [e.target.name]: e.target.value
    })
    
  }

  const handleSubmit = e => {

    e.preventDefault();
    axios.post("http://localhost:5000/courses",newCourse)
      .then(response => console.log(response))
      .catch(err => console.log("There was an error creating the user", err))

  };


  const cancel = e => {
    e.preventDefault();
  }

  return (
    <div>
      <Header />
      <div className="bounds course--detail">
        <h1>Create Course</h1>
        <div>
          {/* <div>
            <h2 className="validation--errors--label">Validation errors</h2>
            <div className="validation-errors">
              <ul>
                <li>Please provide a value for "Title"</li>
                <li>Please provide a value for "Description"</li>
              </ul>
            </div>
          </div> */}
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