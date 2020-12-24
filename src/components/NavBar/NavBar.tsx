import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../../logo.svg';
import './NavBar.css';

export default class NavBar extends Component {
    render() {
        return (      
            <div className="pt-9 ml-10 mr-16">
                <img src={logo} alt="logo" className='mb-20'/>
                <nav className='nav-container'>
                    <NavLink to="/dashboard" className='nav-item mb-7' activeClassName='nav-item-active'>Dashboard</NavLink>
                    <NavLink to="/clients"  className='nav-item' activeClassName='nav-item-active'>Clients</NavLink>
                    <NavLink to="/projects" className='nav-item  mb-7' activeClassName='nav-item-active'>Projects</NavLink>
                    <NavLink to="/invoices" className='nav-item' activeClassName='nav-item-active'>Invoices</NavLink>
                    <NavLink to="/contracts" className='nav-item' activeClassName='nav-item-active'>Contracts</NavLink>
                    <NavLink to="/expenses" className='nav-item' activeClassName='nav-item-active'>Expenses</NavLink>
                </nav>
            </div>
        )
    }
}
