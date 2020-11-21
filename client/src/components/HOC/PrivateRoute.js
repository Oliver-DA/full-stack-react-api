import React, { useContext }from 'react';
import { Redirect, Route } from 'react-router-dom';
import { Context } from '../Context'

const PrivateRoute = ({ component:Component, ...rest}) => {
    const { user } = useContext(Context)

    return (
        <Route
        {...rest}
        render = { ({props, location}) => 
        user
        ? <Component {...props} />
        :<Redirect to ={{
            pathname: "/signin",
            state: { from: location }
        }} /> }/>
    ); 
}
 
export default PrivateRoute;