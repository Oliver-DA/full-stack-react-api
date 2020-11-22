import React, { useState, useEffect } from 'react';
import axios from 'axios';

//Components
import CourseCard from './CourseCard';
import CreateCourseButton from './CreateCourseButton';
import Header from "../Header";

const Courses = ({ history }) => {

  const [courses, setCourses] = useState([]);

  useEffect(() => {

    const fetchCourses = async () => {

      await axios.get("http://localhost:5000/api/courses")
        .then(response => setCourses(response.data.courses))
        .catch(err => err.response && err.response.status === 500 ? history.push("/error"): null)
    };
    
    fetchCourses();

  }, [history]);

    return (
      <>
        <Header />

        <div className="bounds">
          { courses.map( (course, index) => (
            <CourseCard
            {...course}
            key = {index}/>
          )) }

          <CreateCourseButton />
        </div>
      </>
    );
}
 
export default Courses;