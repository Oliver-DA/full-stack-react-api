import React, { useState, useEffect, useContext } from 'react';
import { Context } from '../Context';
import axios from 'axios';

//Components
import CourseCard from './CourseCard';
import CreateCourseButton from './CreateCourseButton';
import Header from "../Header";

const Courses = ({ history }) => {

  const [courses, setCourses] = useState([]);

  //Context 
  const { coursesUrl } = useContext(Context);

  useEffect(() => {

    const fetchCourses = async () => {

      await axios.get(coursesUrl)
        .then(response => setCourses(response.data.courses))
        .catch(err => err.response && err.response.status === 500 ? history.push("/error"): null);

    };
    
    fetchCourses();

  }, [history, coursesUrl]);

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