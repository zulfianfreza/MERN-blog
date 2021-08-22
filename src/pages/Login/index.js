import React from 'react';
import { useHistory } from 'react-router-dom';
import { LoginBg } from '../../assets';
import { Button, Gap, Input, Link } from '../../component';

const Login = () => {
    const history = useHistory();
    return (
        <div className="main-page">
            <div className="left">
                <img src={LoginBg} className="bg-image" alt="images" />
            </div>
            <div className="right">
                <p className="title">Login</p>
                <Input label="Email" placeholder="Email" />
                <Gap height="18px" />
                <Input label="Password" placeholder="Password" />
                <Gap height="50px" />
                <Button title="Login" onClick={() => history.push('/')} />
                <Link title="Belum punya akun? Daftar" onClick={() => history.push('/register')}/>
            </div>
        </div>
    )
}

export default Login
