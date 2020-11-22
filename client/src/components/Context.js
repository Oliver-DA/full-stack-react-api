import React, { useState } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';

export const Context = React.createContext();

export const Provider = ({ children }) => {

    const [authUser, setUser] = useState(Cookies.getJSON("authenticatedUser") || "");
    const [userCredentials, setUserCredentials] = useState(Cookies.get("userCredentials") || "")
    
    const signIn = async (emailAddress, password) => {

        const encodedCredentials = btoa(`${emailAddress}:${password}`);
        const options = {
            headers: {
                Authorization:`Basic ${encodedCredentials}`
            }
        }

        setUserCredentials(encodedCredentials)

        const response = await axios.get("http://localhost:5000/api/users", options)

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
        Cookies.remove("userCredentials")
        setUser(null);
    }


    return(
        <Context.Provider value={{
            signIn,
            signOut,
            authUser,
            userCredentials
        }}>
            {children}
        </Context.Provider>
    )

};

