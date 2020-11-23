import React, { useContext, useState } from 'react';
import axios from 'axios';
import { Context } from '../Context';
import { useHistory } from "react-router-dom";

//Components
import Header from '../Header';
import ValidationErrors from '../errors/ValidationErrors';
import CourseForm from './CourseForm';

const CreateCourse = () => {
  let history = useHistory();

  //Context
  const {
    authUser,
    coursesUrl,
    authHeader
  } = useContext(Context);

  //State
  const [newCourse, setNewCourse] = useState({
    title:"",
    description:"",
    estimatedTime:"",
    materialsNeeded:"",
    userId:authUser.id
  });

  const [errors, setErrors] = useState(null);

  //Handlers
  const handleChange = e => {
    setNewCourse({
      ...newCourse,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post(coursesUrl, newCourse, authHeader)
      .then(() => history.push("/"))
      .catch(err => {
        if (err.response.status === 500) {
          return history.push("/error")
        }
        setErrors(err.response.data.errors)
      });

  };

  const cancel = e => {
    e.preventDefault();
    history.push("/");
  }

  return (
    <div>
      <Header />
      <div className="bounds course--detail">
        <h1>Create Course</h1>
        <div>

          { errors && <ValidationErrors errors = {errors} /> }
          <CourseForm
          course = {newCourse}
          handleChange = {handleChange}
          handleSubmit = {handleSubmit}
          cancel = {cancel} />
      
        </div>
      </div>
    </div>
  );
}
 
export default CreateCourse;