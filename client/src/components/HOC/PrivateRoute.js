import React, { useContext }from 'react';
import { Redirect, Route } from 'react-router-dom';
import { Context } from '../Context'

const PrivateRoute = ({ component:Component, ...rest}) => {
    const { authUser } = useContext(Context)

    return (
        <Route
        {...rest}
        render = { ({props, location}) => 
        authUser
        ? <Component {...props} />
        :<Redirect to ={{
            pathname: "/signin",
            state: { from: location }
        }} /> }/>
    ); 
}
 
export default PrivateRoute;