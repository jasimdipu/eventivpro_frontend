import React from 'react';
import { Link } from 'react-router-dom';
import * as FcIcons from "react-icons/fc";
import * as FaIcons from "react-icons/fa";

import loginBg from './../../assets/img/register-bg.png'
import './login.css'



const Login = () => {
    return (
        <div className='loginPage'>
             <div className="row">
                <div className="col-md-6">
                    <div className="login-bg-img">
                         <img src={loginBg} className='img-fluid' alt="" />
                    </div> 
                </div>
                <div className="col-md-6">
                    <div className="container">
                        <div className="login-form-section">
                            <div className="login-logo-sec text-center">
                                <h3>Eventiv Pro</h3>
                                <p>Login here</p>
                            </div>
                            <form className='login-form'>
                                <div>
                                    <label htmlFor="email">Email </label>
                                    <br />
                                    <input type="email" name='email' className='loginInput' />
                                </div>
                                <div>
                                    <label htmlFor="password">Password </label>
                                    <br />
                                    <input type="password" name='password' className='loginInput' />
                                </div>
                                <button className='loginBtn-eventiv'>Login</button>
                                <div className='mt-5'>
                                    <h6> Create New Account</h6>
                                    <Link to='/register' style={{textDecoration: 'none', color: '#fff'}}> <button className='new-account-create-eventiv mt-3'>Sign Up</button></Link>
                                </div>
                                <div className='mt-3'>
                                    <h6>Login with social: </h6>
                                    <div className="login-social">
                                        <button><FcIcons.FcGoogle /></button>
                                        <button><FaIcons.FaFacebookSquare className='facebook-login' /></button>
                                        <button><FaIcons.FaTwitter className='twitter-login' /></button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
             </div>
        </div>
    );
};

export default Login;