import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import SDropdown from './SDropdown';
import PDropdown from './PDropdown';

function Navbar() {
const [click, setClick] = useState(false);
const [sdropdown, setsdropdown] = useState(false);
const [pdropdown, setpdropdown] = useState(false);
const handleClick = () => setClick(!click);
const closeMobileMenu = () => setClick(false);

const onMouseEnter = () => {
    if (window.innerWidth < 960) {
        setsdropdown(false);
        setpdropdown(false);
    } else {
        setsdropdown(true);
        setpdropdown(true);
    }
};

const onMouseLeave = () => {
    if (window.innerWidth < 960) {
        setsdropdown(false);
        setpdropdown(false);
    } else {
        setsdropdown(false);
        setpdropdown(false);
    }
};

return (
    <>
        <nav className='navbar'>
            <NavLink exact to="/" className="nav-logo">
                <img src={logo} className="logo" alt="logo"></img>
            </NavLink>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>HOME</Link>
                </li>
                <li className='nav-item'>
                    <Link to='/about' className='nav-links' onClick={closeMobileMenu}>ABOUT</Link>
                </li>
                <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                    <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                        SERVICES <i className='fas fa-caret-down' />
                    </Link>
                    {sdropdown && <SDropdown />}
                </li>
                <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                    <Link to='/projects' className='nav-links' onClick={closeMobileMenu}>
                        PROJECTS <i className='fas fa-caret-down' />
                    </Link>
                    {pdropdown && <PDropdown />}
                </li>
                <li className='nav-item'>
                    <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>CONTACT US</Link>
                </li>
            </ul>
        </nav>
    </>
);
}

export default Navbar;