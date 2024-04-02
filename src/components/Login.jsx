import { useState } from "react";
import Layout from "../shared/Layout"
import Title from "../shared/Title"
import './styles/login.scss'
import Button from "../shared/Button";

function Login () {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    return(
        <div>
            <Layout>
                <Title>Login</Title>
            </Layout>
            <div className="container">
                <div className="form-login">
                    <form action="">
                        <div className="form-group">
                            <label htmlFor="">Username</label>
                            <input type='text'
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            placeholder="Username" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Password</label>
                            <input type='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password" />
                        </div>
                        <Button className='btn btn-primary' text='Login' />
                        <div className="not-member">Not a member? <span>Register</span></div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;