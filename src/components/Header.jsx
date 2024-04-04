import { useContext } from "react";
import Layout from "../shared/Layout"
import {Link} from 'react-router-dom'
import './styles/header.scss'
import Button from "../shared/Button";
import Logo from "../images/nendu.png"
import AuthContext from "../context/Auth/userAuthenticationcontext";

function Header() {
    const {authStore} = useContext(AuthContext)

    
    return (
        <Layout className='header-layout'>
            <header className="container">
            <Link to='/'>
                <img src={Logo} alt="Nendu" className="logo" />
            </Link>
            <div className="menu-right">

                {
                     authStore ? (

                        <>
                            <Link to='/profile'>
                                <Button  type='button' className='btn-w-b' text='profile' />
                            </Link>
                            <Link to='/create-job'>
                                <Button  type='button' className='btn-primary' text='Post a job' />
                            </Link>
                        </>
                    ) : (
                        <>
                        
                            <Link to='/login'>
                                <Button  type='button' className='btn-w-b' text='Login' />
                            </Link>
                            <Link to='/create-job'>
                                <Button  type='button' className='btn-primary' text='Post a job' />
                            </Link>
                        </>
                    )
                }
                
            </div>
        </header>
        </Layout>
    )
}

export default Header;