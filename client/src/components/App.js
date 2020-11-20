import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'


//Components
import Courses from './Courses';
import CreateCourse from './CreateCourse';
import UpdateCourse from './UpdateCourse';
import CourseDetail from './CourseDetail';
import UserSignIn from './UserSignIn';
import UserSignUp from './UserSignUp';

function App() {


  return (
    <Router>
  
      <Route exact path = "/" component = {Courses} />
      <Route path = "/courses/create" component = {CreateCourse} />
      <Route path = "/courses/:id/update" component = {UpdateCourse} />
      <Route path = "/courses/:id" component = {CourseDetail} />
      <Route path = "/signin"  component = {UserSignIn} />
      <Route path = "/signup" component = {UserSignUp} />

    </Router>

  );
}

export default App;
