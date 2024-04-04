import { useState, useContext } from "react";
import Layout from "../shared/Layout"
import Title from "../shared/Title"
import '../components/styles/login.scss'
import Button from "../shared/Button";
import {Link, useNavigate} from "react-router-dom"
import Spinner from "../components/Spinner";
import { toast } from 'react-toastify'
import AuthContext from "../context/Auth/userAuthenticationcontext";

function Register () {
    const {registerUser, loading, register} = useContext(AuthContext)
    
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        fullName: '',
        userName: '',
        email: '',
        password: '',
        password2: '',
    })
    const {fullName, userName, email, password, password2} = formData

    const handleFormInputChange = (e) => {
       
        setFormData((prevState) => (
            {
                ...prevState,
                [e.target.name]: e.target.value
            }
        ))
    }
    
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if ( password !== password2 ) {
            toast.error('Password does not match')
            console.log("not a match")
        } else {
            const userData = {
                username:userName,
                name: fullName,
                email,
                password,
            }  
            register(userData)
            navigate('/create-job')
            // console.log(userData)
        }
        
    }
    
    return(
        <>
            <Spinner />        
            <div>
                <Layout>
                    <Title>Register</Title>
                </Layout>
                <div className="container">
                    <div className="form-login">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="">Name</label>
                                <input type='text'
                                    name= 'fullName'
                                    value={fullName}
                                    placeholder="Enter Name"
                                    onChange={handleFormInputChange} 
                                />
                                
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Username</label>
                                <input type='text'
                                    name='userName'
                                    value={userName}
                                    placeholder="Enter Username"
                                    onChange={handleFormInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Email</label>
                                <input type='email'
                                    name='email'
                                    value={email}
                                    placeholder="Enter Email"
                                    onChange={handleFormInputChange} 
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Password</label>
                                <input type='password'
                                    name='password'
                                    value={password}
                                    placeholder="Password"
                                    onChange={handleFormInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Confirm Password</label>
                                <input type='password'
                                    name='password2'
                                    value={password2}
                                    placeholder="Confirm Password"
                                    onChange={handleFormInputChange} 
                                />
                            </div>
                            <Button className='btn btn-primary' text='Register' />
                            <div className="not-member">Not a member? <Link to='/login'><span>Login</span></Link></div>
                        </form>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Register;