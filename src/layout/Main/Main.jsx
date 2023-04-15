import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Home from '../../Pages/Home/Home/Home';
import SideNav from '../../Pages/Home/SideNav/SideNav';

const Main = () => {
    return (
        <div>
            <Navbar />
            <div className='bg-white'>
                <div className="grid grid-cols-3 gap-4 customContainer">
                    <SideNav />
                    <div className='col-span-2'>
                        <Outlet />
                    </div>

                </div>
            </div>
            <Home />
            <Footer />
        </div>
    );
};

export default Main;