import React, { useState } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';

export const Context = React.createContext();

export const Provider = ({ children }) => {

    //Get the Authuser and userCredentials stored in a cookie or asign them the value '';
    //userCredentials will store email and password on a cookie to use it through the app
    //for user validation on private routes.
    const [authUser, setUser] = useState(Cookies.getJSON("authenticatedUser") || "");
    const [userCredentials, setUserCredentials] = useState(Cookies.get("userCredentials") || "");

    //Urls
    const coursesUrl = "https://obscure-oasis-11593.herokuapp.com/api/courses/";
    const usersUrl = "https://obscure-oasis-11593.herokuapp.com/api/users/";

    
    const signIn = async (emailAddress, password) => {
        //btoa creates a Base64-encoded ASCII string
        const encodedCredentials = btoa(`${emailAddress}:${password}`);
        const options = {
            headers: {
                Authorization:`Basic ${encodedCredentials}`
            }
        };

        setUserCredentials(encodedCredentials);

        const response = await axios.get(usersUrl, options)

            if (response.status === 200) {
                setUser(response.data.user);
                Cookies.set("authenticatedUser", JSON.stringify(response.data.user), { expires: 1 });
                Cookies.set("userCredentials", encodedCredentials, { expires: 1})   
                } else {
                setUser(null);
            }

        
        return response
    };

    const signOut = () => {
        Cookies.remove("authenticatedUser");
        Cookies.remove("userCredentials");
        setUser(null);
    }

    const cancel = (history) => {
        history.push("/");
    }

    //Auth Header
    const authHeader = {
        headers: {
            Authorization:`Basic ${userCredentials}`,
        }
    };

    return(
        <Context.Provider value={{
            signIn,
            signOut,
            authUser,
            userCredentials,
            coursesUrl,
            usersUrl,
            authHeader,
            cancel
        }}>
            {children}
        </Context.Provider>
    )

};

