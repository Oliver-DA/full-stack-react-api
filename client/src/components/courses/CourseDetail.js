import React, { useState, useEffect, useContext } from 'react';
import { Context } from "../Context";
import axios from 'axios';

//Components
import ActionsBar from '../ActionsBar';
import CourseDisplay from './CourseDisplay';
import Header from '../Header';

const CourseDetail = ({ match, history }) => {
  //match and history are properties given to the components rendered by <Route />
  const { id } = match.params;

  //State
  const [course, setCourse] = useState('');

  //Context
  const { coursesUrl } = useContext(Context);

  useEffect(() => {

    const fetchCourse = async () => {
      //This request will get the clicked course from the api 
      //and populate our state ir order to display it's information
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