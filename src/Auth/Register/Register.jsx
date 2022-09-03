import React from 'react';
import { Link } from 'react-router-dom'; 


import loginBg from './../../assets/img/register-bg-img.jpg'
import './register.css'

const Register = () => {
    return (
        <div className='RegisterPage'>
        <div className="row">
           <div className="col-md-6">
               <div className="reg-bg-img">
                    <img src={loginBg} className='img-fluid' alt="" />
               </div> 
           </div>
           <div className="col-md-6">
               <div className="container">
                   <div className="login-form-section">
                       <div className="login-logo-sec text-center">
                           <h3>Eventiv Pro</h3>
                           <p>Create new account</p>
                       </div>
                       <form className='login-form'>
                           <div>
                               <label htmlFor="fname">Frist Name: </label>
                               <br />
                               <input type="text" name='fname' className='regInput' />
                           </div>
                           <div>
                               <label htmlFor="lname">Last Name </label>
                               <br />
                               <input type="email" name='lname' className='regInput' />
                           </div>
                           <div>
                               <label htmlFor="email">Email </label>
                               <br />
                               <input type="email" name='email' className='regInput' />
                           </div>
                           <div>
                               <label htmlFor="password">Password </label>
                               <br />
                               <input type="password" name='password' className='regInput' />
                           </div>
                           <button className='loginBtn-eventiv mt-3'>Login</button>
                           <div className='mt-3'>
                               <h6> Create New Account</h6>
                               <button className='new-account-create-eventiv mt-3'>Register new account</button>
                           </div>
                           <div className='text-center mt-3'>
                                <p>Already have an account <Link to='/login'>Login</Link> </p>
                           </div> 
                       </form>
                   </div>
               </div>
           </div>
        </div>
   </div>
    );
};

export default Register;