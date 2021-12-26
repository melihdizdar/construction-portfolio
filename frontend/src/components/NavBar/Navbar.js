import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import styled from 'styled-components';
import { useLocation } from "react-router"
import { useMediaQuery } from 'react-responsive'

function Navbar() {
const [click, setClick] = useState(false);
const handleClick = () => setClick(!click);
const closeMobileMenu = () => setClick(false);

const [navBg, setNavBg] = React.useState("none");
const location = useLocation();
React.useEffect(() => {
    if (window.location.pathname === "/about") {
        setNavBg("#1c1c1c");
    }else if(window.location.pathname === "/services"){
        setNavBg("#1c1c1c");
    }else if(window.location.pathname === "/projects"){
        setNavBg("#1c1c1c");
    }else if(window.location.pathname === "/contact"){
        setNavBg("#1c1c1c");
    }
    else {
        setNavBg('none')
    }
}, [location]);

const isiPadScreen = useMediaQuery({ query: '(max-width: 768px)' })
const isDefaultScreen = useMediaQuery({ query: '(min-width: 769px)' })
return (
    <NavBarStyled>
            {isDefaultScreen && (
                <nav className='navbar' style={{ background: navBg }}>
                    <NavLink exact to="/" className="nav-logo">
                        <img src={logo} className="logo" alt="logo"></img>
                    </NavLink>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>ANASAYFA</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/about' className='nav-links' onClick={closeMobileMenu}>HAKKIMIZDA</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/services' className='nav-links' onClick={closeMobileMenu}>SERVİSLER</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/projects' className='nav-links' onClick={closeMobileMenu}>PROJELER</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>İLETİŞİM</Link>
                        </li>
                    </ul>
                </nav>
            )}
            {isiPadScreen && (
            <nav className='navbar' style={{ backgroundColor: "#1c1c1c" }}>
                <NavLink exact to="/" className="nav-logo">
                    <img src={logo} className="logo" alt="logo"></img>
                </NavLink>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>ANASAYFA</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/about' className='nav-links' onClick={closeMobileMenu}>HAKKIMIZDA</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/services' className='nav-links' onClick={closeMobileMenu}>SERVİSLER</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/projects' className='nav-links' onClick={closeMobileMenu}>PROJELER</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>İLETİŞİM</Link>
                    </li>
                </ul>
            </nav>
            )}
    </NavBarStyled>
);
}

export default Navbar;

const NavBarStyled = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
.navbar {
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    top: 0;
    z-index: 1;
    background:none;
}
.nav-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 80px;
    max-width: 1500px;
}

.nav-logo {
    color: #0E0E0E;
    align-items: center;
    margin-left: 20px;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    flex-grow: 1;
}
img:hover{
    opacity: 0.8;
}

.nav-menu {
    display: flex;
    list-style: none;
    text-align: center;
    margin-right: 2rem;
}

.nav-links {
    color: white;
    text-decoration: none;
    padding: 0.5rem 0.4rem;
    height: 100%;
    font-size: 0.9rem;
    font-family: 'Roboto', sans-serif;
    font-weight: normal;
}
.nav-links:hover {
    color: white;
    height: 50px;
    width: 100%;
    background-color: #ff3838;
    transition: all 0.4s ease;
}
.nav-item {
    line-height: 40px;
    margin-right: 2rem;
}
.nav-icon {
    display: none;
}
.logo{
    width: 60px;
    height: 60px;
}
.fa-bars {
    display: none;
}
@media screen and (max-width: 768px) {
    .navbar{
        background:#1c1c1c;
    }
    .fa-bars {
        color: #ff3838;
        font-size: 3rem;
        display: block;
        padding-right: 2rem;
    }
    .fa-times {
        color: #ff3838;
        font-size: 3rem;
        padding-right: 2rem;
    }
    .nav-menu {
        display: flex;
        flex-direction: column;
        width: 100%;
        position: absolute;
        top: 100px;
        left: -110%;
        opacity: 1;
        transition: all 0.3s ease;
    }
    .nav-menu.active {
        background: #1c1c1c;
        left: 0;
        opacity: 1;
        transition: all 0.3s ease;
        z-index: 1;
    }
    .nav-links {
        padding: 1.5rem;
        width: 100%;
        display: table;
        color: white;
    }
    .nav-links:hover {
        color: white;
    }
    .nav-icon {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: white;
    }
    .nav-item:hover:after {
        width: 100%;
        background: none;
    }
}
`;