import React, { useContext }from 'react';
import { Redirect, Route } from 'react-router-dom';
import { Context } from '../Context'

const PrivateRoute = ({ component:Component, ...rest }) => {
    const { authUser } = useContext(Context)

    return (
        <Route
        {...rest}
        render = { ({location}) => 
        authUser
        ?(
            <Component  />

        ):( <Redirect to ={{
            pathname: "/signin",
            state: { from: location }
        }} /> ) }/>
    ); 
}
 
export default PrivateRoute;