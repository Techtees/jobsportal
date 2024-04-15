import { useState, useContext, useEffect } from "react";
import Layout from "../shared/Layout"
import Title from "../shared/Title"
import '../components/styles/login.scss'
import Button from "../shared/Button";
import {Link, useNavigate} from "react-router-dom"
import {toast} from 'react-toastify'


import AuthContext from "../context/Auth/userAuthenticationcontext";

function Profile () {
  const {authStore, logout}  = useContext(AuthContext);
  const {username, name, email} = authStore
  const navigate = useNavigate()
     console.log(authStore)
  const handleLogout = () => {
    logout()
    navigate('/login')
    console.log("log out")
  }

    


      
    return(
        <div>
            <Layout>
                <Title>Profile</Title>
            </Layout>
            <div className="container">
                <div className="form-login">
                    <p>UserName: {username}</p>
                    <p>Name: {name}</p>
                    <p>Email: {email}</p>
                    <Button onClick={handleLogout} className='btn' text='Logout'/>
                </div>
            </div>
        </div>
    )
}

export default Profile;