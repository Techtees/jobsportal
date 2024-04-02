import Layout from "../shared/Layout"
import {Link} from 'react-router-dom'
import './styles/header.scss'
import Button from "../shared/Button";
import Logo from "../images/nendu.png"

function Header() {
    return (
        <Layout className='header-layout'>
            <header className="container">
            <Link to='/'>
                <img src={Logo} alt="Nendu" className="logo" />
            </Link>
            <div className="menu-right">
                <Link to='/login'>
                     <Button  type='button' className='btn-w-b' text='Login' />
                </Link>
                <Link to='/create-job'>
                    <Button  type='button' className='btn-primary' text='Post a job' />
                </Link>
            </div>
        </header>
        </Layout>
    )
}

export default Header;