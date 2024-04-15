import React, {createContext, useEffect, useState} from 'react'
import { FaSketch } from 'react-icons/fa';

const AuthContext = createContext();


export const AuthProvider = ({children}) => {
    const [userState, setUserState] = useState(null)
    
    const [loading, setLoading] = useState(false)
    const [registerUser, setRegisterUser] = useState({})
    const [loginUser, setLoginUser] = useState({})
    const [ error , setError] = useState('')
    const [message, setMessage] = useState('')
    const [success, setSuccess] = useState(false)

    // Local storage
    const userDataString = localStorage.getItem('user')
    const authStore = JSON.parse(userDataString)
    // const f1 = authStore
    
    
    const authDataFormat = {
     userState: userState ? userState : null
    }

    
     const register = async (userData) => {
        try {
            
            const response = await fetch('https://nendu.syonagency.com/api/v1/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(userData),
            })

            const data = await response.json()
            if (!response.ok) {
                throw new Error(data.message);
            }
            if(data) {
                localStorage.setItem('user', JSON.stringify(response.data))
            }
            setRegisterUser(data)
            
            
            return data;
        } catch (error) {
            console.log("there is an error with the fetch", error.message)
        }
    }      
    const login = async (userData) => {
        setLoading(true)
        try {
            const response = await fetch('https://nendu.syonagency.com/api/v1/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(userData),
            });
            const data = await response.json();
            setLoading(false)
            if (!response.ok) {
                throw new Error(data.message);
            }
    
            if (data) {
                setSuccess(true)
                localStorage.setItem('user', JSON.stringify(data));

            }
            setLoginUser(data);
            return data;
            
        } catch (error) {
            setError(error)    
        } 
    };

    const logout = () => {
        localStorage.removeItem('user');
        setUserState(null)
    }
    
    
    
    return <AuthContext.Provider value={{
        loading,
        register, 
        registerUser,
        login,
        loginUser,
        message,
        error, success,
        authStore,
        authDataFormat,
        logout

        }}>
        {children}
    </AuthContext.Provider>
}


export default AuthContext;
