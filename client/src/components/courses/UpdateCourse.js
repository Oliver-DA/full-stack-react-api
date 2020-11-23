import React, { useState, useEffect, useContext} from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Context } from '../Context';
import axios from 'axios';

//Components
import Header from '../Header';
import ValidationErrors from '../errors/ValidationErrors';
import CourseForm from './CourseForm';

const UpdateCourse = () => {
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

    updateCourse()

  }, [id, authUser.id, history, coursesUrl])

  //Handlers
  const handleChange = e => {
    setUpdatedCourse({
      ...updatedCourse,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

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
          <CourseForm
          course = {updatedCourse}
          updatedCourse = {updatedCourse}
          handleChange = {handleChange}
          handleSubmit = {handleSubmit}
          cancel = {cancel} />
        </div>
      </div>
    </div>
  );
}
 
export default UpdateCourse;