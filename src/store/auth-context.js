import React, { useState, useEffect, useCallback } from 'react'

let logoutTimer;

const AuthContext = React.createContext({
    token: '',
    dni: '',
    isLoggedIn: false,
    login: ({token, dni}) => { },
    logout: () => { }
});

const calculateReaminingTime = expirationTime => {
    const currentTime = new Date().getTime();
    const adjExpirationTime = new Date(expirationTime).getTime();

    const remainingDuration = adjExpirationTime - currentTime

    return remainingDuration
}

const retrieveStoredToken = () => {
    const storedToken = localStorage.getItem('token')
    const storedDni = localStorage.getItem('dni')
    const storedExpirationDate = localStorage.getItem('expirationTime')

    const remainingTime = calculateReaminingTime(storedExpirationDate)

    if (remainingTime <= 60000) {
        localStorage.removeItem('token')
        localStorage.removeItem('dni')
        localStorage.removeItem('expirationTime')
        return null;
    }

    return {
        token: storedToken,
        duration: remainingTime,
        dni: storedDni

    }


}

export const AuthContextProvider = (props) => {

    // console.log('AuthContext', AuthContext)

    const tokenData = retrieveStoredToken();

    let initialToken;
    let dniStored;
    if (tokenData) {
        initialToken = tokenData.token;
        dniStored = tokenData.dni;
    }

    const [token, setToken] = useState(initialToken);
    const [dni, setDni] = useState(dniStored);

    const userIsLoggedin = !!token;

    const logoutHandler = useCallback(() => {
        setToken(null)
        setDni(null)
        localStorage.removeItem('token')
        localStorage.removeItem('dni')
        localStorage.removeItem('expirationTime')

        if (logoutTimer) {
            clearTimeout(logoutTimer)
        }
    }, [])

    const loginHandler = ({token, dni}, expirationTime) => {
        console.log('token dni expirationTime', token, dni, expirationTime);
        setToken(token)
        setDni(dni)

        localStorage.setItem('token', token)
        localStorage.setItem('dni', dni)
        localStorage.setItem('expirationTime', expirationTime)
        

        const remainingTime = calculateReaminingTime(expirationTime)

        logoutTimer = setTimeout(logoutHandler, remainingTime)

    }

    useEffect(() => {
        if (tokenData) {
            console.log('token duration', tokenData.duration);
            logoutTimer = setTimeout(logoutHandler, tokenData.duration)
        }
    }, [tokenData, logoutHandler])

    const contextValue = {
        token: token,
        dni: dni,
        isLoggedIn: userIsLoggedin,
        login: loginHandler,
        logout: logoutHandler,
    }


    return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>
}

export default AuthContext;