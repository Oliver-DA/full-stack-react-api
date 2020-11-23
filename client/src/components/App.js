import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//HOC
import PrivateRoute from './HOC/PrivateRoute';

//Components
import Courses from './courses/Courses';
import CreateCourse from './courses/CreateCourse';
import UpdateCourse from './courses/UpdateCourse';
import CourseDetail from './courses/CourseDetail';
import UserSignIn from './user/UserSignIn';
import UserSignUp from './user/UserSignUp';
import UserSignOut from './user/UserSignOut';
import NotFound from './errors/NotFound';
import Forbidden from './errors/Forbidden';
import UnhandledError from './errors/UnhandledError';

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
        <Route path = "/notfound" component = {NotFound} />
        <Route path = "/forbidden" component = {Forbidden} />
        <Route path = "/error" component = {UnhandledError} />
        <Route render  = { () => <NotFound moves = {-1} />} />
      </Switch>
    </Router>

  );
}

export default App;
