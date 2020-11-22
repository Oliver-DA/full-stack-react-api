import React, { useState, useEffect } from 'react';
import axios from 'axios';

//Components
import ActionsBar from '../ActionsBar';
import CourseDisplay from './CourseDisplay';
import Header from '../Header';

const CourseDetail = ({ match, history }) => {
  const { id } = match.params;

  const [course, setCourse] = useState('');

  useEffect(() => {

    const fetchCourse = async () => {

      await axios.get(`http://localhost:5000/api/courses/${id}`)
        .then(response => setCourse(response.data))
        .catch(err => {
          if ( err.response.status === 404 ) {
            return history.push("/notfound");
          }
          else if (err.response.status === 500) {
            return history.push("/error");
          }
        })
    }

    fetchCourse();

  }, [id, history])

    return (
      <>
        <Header />
        <ActionsBar id = {id} course = {course} />
        <CourseDisplay {...course} />
      </>
    );
}
 
export default CourseDetail;