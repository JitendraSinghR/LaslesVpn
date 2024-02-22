import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div id='nav-main'>
           
            <div id='nav-logo-section'>
                    <img src="../images/logo/logo_vpn.svg" alt="logo_VPN"></img>
            </div>
            <div id='nav-items-section' className={showMenu ? 'show' : ''}>
                <ul>
                    <li className='nav-item'> <a href='#'> About</a></li>
                    <li className='nav-item'> <a href='#'> Features</a></li>
                    <li className='nav-item'> <a href='#'> Pricing</a></li>
                    <li className='nav-item'> <a href='#'> Testimonials</a></li>
                    <li className='nav-item'> <a href='#'> Help</a></li>
                </ul>
            </div>
            <div id='signin-section' className={showMenu ? 'show' : ''}>
                <div className='signin'>
                    <b>Sign In</b>
                </div>
                <div className='signup-btn'>
                    <button type="button" className="btn btn-outline-danger" style={{ width: '150px', height : '45px' ,  borderRadius : '50px' }}>Sign Up</button>
                </div>
            
            </div>
            <div className='hamburger-menu' onClick={toggleMenu}>
                <img className='hamburger-icon' src="../images/logo/hamburger.png" alt="hamburger-icon"></img>
            </div>
        </div>
    )
}

export default Navbar;
