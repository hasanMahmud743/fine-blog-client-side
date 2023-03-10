import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/navbar/Navbar';

const Main = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;