import React from 'react'; 
import { Link } from 'react-router-dom';


import loginBg from '../../../assets/img/register-bg-img.jpg' 
import './companyName.css'

const CompanyName = () => {
    return (
        <div className='SignUpDetailsPage'>
        <div className="row">
           <div className="col-md-6">
               <div className="signup-details-bg-img">
                    <img src={loginBg} className='img-fluid' alt="" />
               </div> 
           </div>
           <div className="col-md-6">
               <div className="container">
                   <div className="">
                       <div className="login-logo-sec text-center">
                           <h3>Eventiv Pro</h3> 
                       </div>
                       <form className='details-group'> 
                            <h3>Please enter your company name</h3>
                            <div className="company-name-field">
                                <label htmlFor="companyname">Company Name: </label>
                                <br />
                                <input type="text" />
                                <button className='eventiv-attend-btn mt-3'>Next</button>
                            </div>
                            <Link to='/login'>
                                 <button className='btn btn-text'>Back</button>  
                            </Link>
                           
                       </form>
                   </div>
               </div>
           </div>
        </div>
   </div>
    );
};

export default CompanyName;