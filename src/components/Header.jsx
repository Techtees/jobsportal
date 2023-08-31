import Layout from "../shared/Layout"
import './styles/header.scss'
import Button from "../shared/Button";

function Header() {
    return (
        <header className="container">
            <span className="logo">Jobstal</span>
            <div className="menu-right">
                <Button  type='button' className='btn-w-b' text='Login' />
                <Button  type='button' className='btn-primary' text='Post a job' />
            </div>
        </header>
    )
}

export default Header;