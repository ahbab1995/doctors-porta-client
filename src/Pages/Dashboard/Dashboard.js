import React from 'react';
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';


const Dashboard = () => {
    return (
        <div className="drawer lg:drawer-open">
        <input id="dashboard-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content px-2">
            <h1 className='text-3xl text-cyan-500 font-bold'>Dashboard</h1>
        <Outlet />
         
        
        </div> 
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer-2" className="drawer-overlay"></label> 
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li><Link to='/dashboard'>Sidebar Item 1</Link></li>
            <li><Link to='/dashboard/review'>Sidebar Item 2</Link></li>
          </ul>
        
        </div>
      </div>
    );
};

export default Dashboard;