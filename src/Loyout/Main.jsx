import React from 'react';
import { Outlet } from 'react-router-dom';
import Fotter from '../components/Footer/Fotter';
import Home from '../components/Home/Home';
import Navbar from '../components/sheared/Navbar/Navbar';

const Main = () => {
    return (
        <div className='bg-black text-white'>
            <Navbar></Navbar>
            <Outlet></Outlet>
           
            <Fotter></Fotter>
            
        </div>
    );
};

export default Main;