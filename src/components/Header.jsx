import Layout from "../shared/Layout"
import './styles/header.scss'
import Button from "../shared/Button";

function Header() {
    return (
        <header className="container">
            <span className="logo">Jobs Portal</span>
            <div className="menu-right">
                <Button  type='button' btnStyle='btn-w-b' text='Login' />
                <Button  type='button' btnStyle='btn-primary' text='Post a job' />
            </div>
        </header>
    )
}

export default Header;