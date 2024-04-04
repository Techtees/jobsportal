import { useState, useContext, useEffect } from "react";
import Layout from "../shared/Layout"
import Title from "../shared/Title"
import '../components/styles/login.scss'
import Button from "../shared/Button";
import {Link, useNavigate} from "react-router-dom"
import {toast} from 'react-toastify'


import AuthContext from "../context/Auth/userAuthenticationcontext";

function Profile () {
  const {authStore}  = useContext(AuthContext);
  const {username, name, email} = authStore
    const Navigate = useNavigate()


      
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
                </div>
            </div>
        </div>
    )
}

export default Profile;