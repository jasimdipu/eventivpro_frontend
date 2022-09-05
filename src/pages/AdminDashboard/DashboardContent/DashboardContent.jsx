import React from 'react';

import './dashboardContent.css'

const DashboardContent = () => {
    return (
        <div className='dashboard-content'>
            <div className='p-3 bg-info'>
                <h3>Dashboard Content here</h3>
            </div>
            <div>
               <span className='p-5 bg-success d-inline-block rounded m-3'>Chart</span>  
               <span className='p-5 bg-primary d-inline-block rounded m-3'>Chart</span>  
               <span className='p-5 bg-success d-inline-block rounded m-3'>Chart</span>  
            </div>
            <div>
               <span className='p-5 bg-primary d-inline-block rounded m-3'>Chart</span>  
               <span className='p-5 bg-success d-inline-block rounded m-3'>Chart</span>  
               <span className='p-5 bg-primary d-inline-block rounded m-3'>Chart</span>  
            </div>
        </div>
    );
};

export default DashboardContent;