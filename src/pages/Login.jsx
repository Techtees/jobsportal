import { useState, useContext, useEffect } from "react";
import Layout from "../shared/Layout"
import Title from "../shared/Title"
import '../components/styles/login.scss'
import Button from "../shared/Button";
import {Link, useNavigate} from "react-router-dom"
import {toast} from 'react-toastify'
import Spinner from "../components/Spinner";


import AuthContext from "../context/Auth/userAuthenticationcontext";

function Login () {
    const {loading, loginUser, login, success, message, error} = useContext(AuthContext);
    const userDataString = localStorage.getItem('login')
    const jsonLogin = JSON.parse(userDataString)
    // console.log(jsonLogin)

    const Navigate = useNavigate()

    useEffect(() => {
        if(error) {
            toast.error('invalid Login')
        } 
        if(loginUser && success) {
            Navigate('/')

        } else{
            Navigate('/login')
        }
        console.log(loginUser);
    }, [error, success, loginUser]);
    
    const [formData, setFormData] = useState({
        userName:'',
        password:'',
    })
    // console.log(loginUser)
    
    const handleFormInputChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const userData = {
            username:userName,
            password,           
        }
        login(userData)
        console.log(userData)
        
    }
    
    const { userName, password} = formData
    
    return(
        <>
         {
            (loading) ? <Spinner /> : null
         }
            <div>
                <Layout>
                    <Title>Login</Title>
                </Layout>
                <div className="container">
                    <div className="form-login">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="">Username</label>
                                <input type='text'
                                    value={userName}
                                    name= 'userName'
                                    onChange={handleFormInputChange}
                                    placeholder="Username" 
                                    required
                                    />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Password</label>
                                <input type='password'
                                    value={password}
                                    name= 'password'
                                    onChange={handleFormInputChange}
                                    placeholder="Password" 
                                    required
                                />
                            </div>
                            <Button className='btn btn-primary' text='Login' />
                            <div className="not-member">Not a member? <Link to='/register'><span>Register</span></Link></div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;