import Layout from "../shared/Layout"
import {Link} from 'react-router-dom'
import './styles/header.scss'
import Button from "../shared/Button";

function Header() {
    return (
        <header className="container">
            <Link to='/'>
                <span className="logo">Jobstal</span>
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
    )
}

export default Header;