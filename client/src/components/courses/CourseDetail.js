import React, { useState, useEffect } from 'react';
import axios from 'axios';

//Components
import ActionsBar from '../ActionsBar';
import CourseDisplay from './CourseDisplay';
import Header from '../Header';

const CourseDetail = ({ match }) => {
  const { id } = match.params;

  const [course, setCourse] = useState('');

  useEffect(() => {

    const fetchCourse = async () => {

      await axios.get(`http://localhost:5000/api/courses/${id}`)
        .then(response => setCourse(response.data))
        .catch(err => console.log("There was an error fetchin the data", err))
    }

    fetchCourse();

  },[id])

    return (
      <>
        <Header />
        <ActionsBar id = {id} course = {course} />
        <CourseDisplay {...course} />
      </>
    );
}
 
export default CourseDetail;