import React from 'react';
import { useHistory } from 'react-router-dom';
import { RegisterBg } from '../../assets';
import { Button, Gap, Input, Link } from '../../component';
import './register.scss';

const Register = () => {
    const history = useHistory();
    return (
        <div className="main-page">
            <div className="left">
                <img src={RegisterBg} className="bg-image" alt="images" />
            </div>
            <div className="right">
                <p className="title">Register</p>
                <Input label="Full Name" placeholder="Full Name" />
                <Gap height="18px" />
                <Input label="Email" placeholder="Email" />
                <Gap height="18px" />
                <Input label="Password" placeholder="Password" />
                <Gap height="50px" />
                <Button title="Register" onClick={() => history.push('/login')}/>
                <Link title="Kembali ke Login" onClick={() => history.push('/login')}/>
            </div>
        </div>
    )
}

export default Register