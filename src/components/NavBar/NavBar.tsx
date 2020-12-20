import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import logo from '../../logo.svg';
import './NavBar.css';

export default class NavBar extends Component {

    render() {
        return (
            <div className="pt-9 ml-10">
                <img src={logo} alt="logo" className='mb-20'/>
                <ul className='nav-container'>
                    <li className='nav-item nav-item-active mb-7'>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/clients">Clients</Link>
                    </li>
                    <li className='nav-item mb-7'>
                        <Link to="/shoelaces">Projects</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/bubblegum">Invoices</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/shoelaces">Contracts</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/shoelaces">Expenses</Link>
                    </li>
                </ul>
            </div>
        )
    }
}
