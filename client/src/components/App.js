import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'


//Components
import Courses from './courses/Courses';
import CreateCourse from './courses/CreateCourse';
import UpdateCourse from './courses/UpdateCourse';
import CourseDetail from './courses/CourseDetail';
import UserSignIn from './UserSignIn';
import UserSignUp from './UserSignUp';

function App() {

  return (

    <Router>
      <Route exact path = "/" component = {Courses} />
      <Route exact path = "/courses/create" component = {CreateCourse} />
      <Route exact path = "/courses/:id/update" component = {UpdateCourse} />
      <Route exact path = "/courses/:id" component = {CourseDetail} />
      <Route path = "/signin"  component = {UserSignIn} />
      <Route path = "/signup" component = {UserSignUp} />
    </Router>

  );
}

export default App;
