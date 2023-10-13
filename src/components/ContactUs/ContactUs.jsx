import React from "react";
import './style.scss';
import { useNavigate } from "react-router-dom";

const ContactUs = () => {
    const navigate = useNavigate()
    const onClickHandler = () => {
        navigate('/Login');
    }

    const onClickRegister = () => {
        navigate('/Register');
    }

    return (
        <div className="loginMainWrapper">
            <div className="loginFiledContainer">
                <h2>WelCome to Our Food Hub...</h2>
                <h4>To Join Us</h4>
                <div className="loginFieldBox">

                    <a className="btn loginBtn" onClick={onClickHandler} target="_blank">
                        Login
                    </a>

                    <a className="btn loginBtn" onClick={onClickRegister} target="_blank">
                        Register
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ContactUs;