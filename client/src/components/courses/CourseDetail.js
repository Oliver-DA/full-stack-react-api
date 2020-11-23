import React, { useState, useEffect, useContext } from 'react';
import { Context } from "../Context";
import axios from 'axios';

//Components
import ActionsBar from '../ActionsBar';
import CourseDisplay from './CourseDisplay';
import Header from '../Header';

const CourseDetail = ({ match, history }) => {
  const { id } = match.params;

  //State
  const [course, setCourse] = useState('');

  //Context
  const { coursesUrl } = useContext(Context);

  useEffect(() => {

    const fetchCourse = async () => {

      await axios.get(coursesUrl + id)
        .then(response => setCourse(response.data))
        .catch(err => {
          if (err.response.status === 404) {
            return history.push("/notfound");
          }
          else if (!err.response || err.response.status === 500) {
            return history.push("/error");
          }
        });
    }

    fetchCourse();

  }, [id, history, coursesUrl])

    return (
      <>
        <Header />
        <ActionsBar id = {id} course = {course} />
        <CourseDisplay {...course} />
      </>
    );
}
 
export default CourseDetail;