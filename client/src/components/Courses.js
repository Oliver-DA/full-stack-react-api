import React, { useState, useEffect } from 'react';
import axios from 'axios';

//Components
import CourseCard from './CourseCard';
import CreateCourseButton from './CreateCourseButton';


const Courses = () => {

  const [courses, setCourses] = useState([]);

  useEffect(() => {

    const fetchCourses = async () => {

      await axios.get("http://localhost:5000/api/courses")
        .then(response => setCourses(response.data.courses))
        .catch(err => console.log("There was an error fetching the data", err))
    };
    
    fetchCourses();

  }, []);

    console.log(courses)

    return (
      <>
        <div>
          <div className="header">
            <div className="bounds">
              <h1 className="header--logo">Courses</h1>
              <nav>
                <a className="signup" href="sign-up.html">
                  Sign Up
                </a>
                <a className="signin" href="sign-in.html">
                  Sign In
                </a>
              </nav>
            </div>
          </div>
          <div className="bounds">

            { courses.map( (course, index) => (
              <CourseCard
              {...course}
              key = {index}/>
            )) }

            <CreateCourseButton />
          </div>
        </div>
      </>
    );
}
 
export default Courses;