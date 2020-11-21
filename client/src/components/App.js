import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//HOC
import PrivateRoute from './HOC/PrivateRoute';

//Components
import Courses from './courses/Courses';
import CreateCourse from './courses/CreateCourse';
import UpdateCourse from './courses/UpdateCourse';
import CourseDetail from './courses/CourseDetail';
import UserSignIn from './UserSignIn';
import UserSignUp from './UserSignUp';
import UserSignOut from './UserSignOut';

function App() {

  return (

    <Router>
      <Switch>
        <Route exact path = "/" component = {Courses} />
        <PrivateRoute exact path = "/courses/create" component = {CreateCourse} />
        <PrivateRoute exact path = "/courses/:id/update" component = {UpdateCourse} />
        <Route exact path = "/courses/:id" component = {CourseDetail} />
        <Route path = "/signin"  component = {UserSignIn} />
        <Route path = "/signup" component = {UserSignUp} />
        <Route path = "/signout" component = {UserSignOut} />
      </Switch>
    </Router>

  );
}

export default App;
