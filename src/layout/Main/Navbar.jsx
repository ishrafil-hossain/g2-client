import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

const Navber = () => {

    const menuItems = <>
        <li><Link to="/write-review">Write Review</Link></li>
        <li><Link to="/software">Software</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/business">G2 for Business</Link></li>
        <li><Link to="/deals">$ Deals</Link></li>
        <button className="btn btn-outline btn-error bg-white font-bold text-orange-700 border-orange-600 rounded-full">Join or Sing In</button>
    </>

    return (
        <div style={{ backgroundColor: '#FEF5F4' }}>
            <div className="customContainer">
                <div className="navbar flex justify-between px-0">
                    <div className="w-full flex justify-between">
                        <div>
                            <Link to="/" className="text-red-500 text-3xl">
                               G2
                            </Link>
                        </div>
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded w-80  text-black bg-[#FEF5F4] font-medium right-[20%]">
                                {menuItems}
                            </ul>
                        </div>

                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 text-black text-sm font-bold">
                            {menuItems}
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Navber;