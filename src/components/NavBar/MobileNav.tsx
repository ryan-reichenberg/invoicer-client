import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from '../../logo.svg';
import './NavBar.css';

const MobileNav = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const toggleNav = () => {
        setIsNavOpen(!isNavOpen)
    }
    return (
        <div className="lg:hidden relative">

            <svg className={"w-7 h-7 sm:w-8 sm:h-8 font-bold text-gray-700 absolute top-0 left-0 m-4 ml-2.5 sm:m-5 " + (isNavOpen ? 'hidden' : '')} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" onClick={toggleNav}></path></svg>
            { isNavOpen &&
            <div className="fixed left-0 top-0 z-20 w-42 md:w-56 h-full bg-white overflow-hidden shadow-md">
                <img src={logo} alt="logo" className='mx-5 mt-20 mb-12'/>
                <nav className='nav-container ml-6'>
                    <svg className="w-6 h-6 font-bold absolute top-0 left-0 m-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" onClick={() => setIsNavOpen(false)}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    {/* TODO: Extract nav to list object */}
                    {/* TODO: Look into making logo smaller for mobile devices */}
                    {/* FIX: Scrolling is enabled in nav window */}
                    <NavLink to="/dashboard" className='nav-item px-6 sm:px-7 mb-7' activeClassName='nav-item-active' onClick={toggleNav}>Dashboard</NavLink>
                    <NavLink to="/clients"  className='nav-item px-6 sm:px-7' activeClassName='nav-item-active'>Clients</NavLink>
                    <NavLink to="/projects" className='nav-item px-6 sm:px-7 mb-7' activeClassName='nav-item-active'>Projects</NavLink>
                    <NavLink to="/invoices" className='nav-item px-6 sm:px-7' activeClassName='nav-item-active'>Invoices</NavLink>
                    <NavLink to="/contracts" className='nav-item px-6 sm:px-7'activeClassName='nav-item-active'>Contracts</NavLink>
                    <NavLink to="/expenses" className='nav-item px-6 sm:px-7'activeClassName='nav-item-active'>Expenses</NavLink>
                </nav>
            </div>
            }
        </div>
    )
}
export default MobileNav;