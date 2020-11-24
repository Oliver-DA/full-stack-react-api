import React, { useState, useEffect, useContext} from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Context } from '../Context';
import axios from 'axios';

//Components
import Header from '../Header';
import ValidationErrors from '../errors/ValidationErrors';
import CourseForm from './CourseForm';

const UpdateCourse = () => {
  //Use history is a hook from 'react-router' to get acces to the use instance.
  //Use Params returns an object of key/value pairs of URL parameters.
  const { id } = useParams();
  const history = useHistory();

  //Context
  const {
    authUser,
    coursesUrl,
    authHeader
  } = useContext(Context);

  //State
  const [updatedCourse, setUpdatedCourse] = useState({
    title:"",
    description:"",
    estimatedTime:"",
    materialsNeeded:""
  });

  const [errors, setErrors] = useState("");
  //First get the course we want to update.
  useEffect(() => {

    const updateCourse = async () => {

      await axios.get(coursesUrl + id)
        .then(response => {
          if (authUser.id !== response.data.userId) {
            return history.push("/forbidden");
          }
          setUpdatedCourse(response.data)
        })
        .catch(err => err.response.status === 404 ? history.push("/notfound") : null )
    }

    updateCourse();

  }, [id, authUser.id, history, coursesUrl])

  //Handlers
  const handleChange = e => {
    setUpdatedCourse({
      ...updatedCourse,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    //Second send the post request with the updatedCourse
    //Authheader contains an object with the credentials to allow the post request
    await axios.put(coursesUrl + id, updatedCourse, authHeader)
      .then(() => history.push(`/courses/${id}`))
      .catch(err => setErrors(err.response.data.errors));
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
          {/* Course form is a component for redering both the create and update course
          form the only change that needs to be make is the prop course */}
          <CourseForm
          course = {updatedCourse}
          updatedCourse = {updatedCourse}
          handleChange = {handleChange}
          handleSubmit = {handleSubmit}
          cancel = {cancel}
          currentForm = "Update Course" />
        </div>
      </div>
    </div>
  );
}
 
export default UpdateCourse;