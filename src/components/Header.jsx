import { useContext, useRef, useState } from "react";
import Layout from "../shared/Layout"
import { FaBars, FaTimes } from "react-icons/fa";
import {Link} from 'react-router-dom'
import './styles/header.scss'
import Button from "../shared/Button";
import Logo from "../images/nendu.png"
import AuthContext from "../context/Auth/userAuthenticationcontext";

function Header() {
    const {authStore} = useContext(AuthContext)

    const navRef = useRef()
    const toggleMobileNav = () => {
        navRef.current.classList.toggle("responsive_nav");
    }
  
    return (
        <Layout className='header-layout'>
            <header className="container">
                <Link to='/'>
                    <img src={Logo} alt="Nendu" className="logo" />
                </Link>
               
                <div className="menu-right" ref={navRef}>

                    {
                        authStore ? (

                            <>
                                <Link to='/profile'>
                                    <Button  type='button' className='btn-w-b' text='profile' onClick={toggleMobileNav} />
                                </Link>
                                <Link to='/create-job'>
                                    <Button  type='button' className='btn-primary' text='Post a job' onClick={toggleMobileNav} />
                                </Link>
                            </>
                        ) : (
                            <>
                            
                                <Link to='/login'>
                                    <Button  type='button' className='btn-w-b' text='Login' onClick={toggleMobileNav}/>
                                </Link>
                                <Link to='/create-job'>
                                    <Button  type='button' className='btn-primary' text='Post a job' onClick={toggleMobileNav}/>
                                </Link>
                            </>
                        )
                    }
                    <FaTimes className="closeIcon" color="white" onClick={toggleMobileNav} />
                </div>
                <FaBars className="mobile" onClick={toggleMobileNav} />
            </header>
        </Layout>
    )
}

export default Header;