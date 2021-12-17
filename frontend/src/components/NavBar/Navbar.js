import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';
import PDropdown from './PDropdown';

function Navbar() {
const [click, setClick] = useState(false);
const [dropdown, setDropdown] = useState(false);
const [Pdropdown, setPDropdown] = useState(false);
const handleClick = () => setClick(!click);
const closeMobileMenu = () => setClick(false);

const onMouseEnter = () => {
    if (window.innerWidth < 960) {
        setDropdown(false);
        setPDropdown(false);
    } else {
        setDropdown(true);
        setPDropdown(true);
    }
};

const onMouseLeave = () => {
    if (window.innerWidth < 960) {
        setDropdown(false);
        setPDropdown(false);
    } else {
        setDropdown(false);
        setPDropdown(false);
    }
};

return (
    <>
        <nav className='navbar'>
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
                    {dropdown && <Dropdown />}
                </li>
                <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                    <Link to='/projects' className='nav-links' onClick={closeMobileMenu}>
                        PROJECTS <i className='fas fa-caret-down' />
                    </Link>
                    {Pdropdown && <PDropdown />}
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