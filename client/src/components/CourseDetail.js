import axios from 'axios';
import React, { useState, useEffect } from 'react';

//Components
import ActionsBar from './ActionsBar';
import CourseDisplay from './CourseDisplay';

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
        <div className="header">
          <div className="bounds">
            <h1 className="header--logo">Courses</h1>
            <nav>
              <span>Welcome Joe Smith!</span>
              <a className="signout" href="index.html">
                Sign Out
              </a>
            </nav>
          </div>
        </div>
        <div>

          <ActionsBar />
          <CourseDisplay {...course} />

        </div>
      </>
    );
}
 
export default CourseDetail;