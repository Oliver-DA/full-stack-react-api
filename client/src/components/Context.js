import React, { useState } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';

export const Context = React.createContext();

export const Provider = ({ children }) => {

    const [user, setUser] = useState(Cookies.getJSON("authenticatedUser") || null);
    
    const signIn = async (emailAddress, password) => {

        const encodedCredentials = btoa(`${emailAddress}:${password}`);
        const options = {
            headers: {
                Authorization:`Basic ${encodedCredentials}`
            }
        }

        await axios.get("http://localhost:5000/api/users", options)
            .then(response => {
                if (response.status === 200) {
                    console.log(response.data.user)
                    setUser(response.data.user);
                    Cookies.set("authenticatedUser", JSON.stringify(response.data.user), { expires: 1 });   
                 } else {
                    setUser(null)
            }})
            .catch(err => console.log("There was an error authenticating the user", err)) 
            .finally(() => console.log(Cookies.get("authenticatedUser")))

        return user
    };

    const signOut = () => {
        Cookies.remove("authenticatedUser");
        setUser(null);
    }

    return(
        <Context.Provider value={{
            signIn,
            signOut,
            user
        }}>
            {children}
        </Context.Provider>
    )

};

