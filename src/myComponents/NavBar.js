import React from 'react';
import logo from '../img/logo.jpg';
import photu from '../img/photu.jpg';
import {
    Link
} from "react-router-dom";
const NavBar = () => {
    return (
        <nav id="navbar">
            <div id="logo">
                <Link to="/"><img src={logo} alt="My 1st React Project" /></Link>
            </div>
            <ul>
                <li className="item"><Link to="/">Home</Link></li>
                <li className="item"><Link to="/About">About</Link></li>
                <li className="item"><Link to="/ContactUs">Contact Us</Link></li>
            </ul>
            <div id="pfp">
                <img src={photu} alt="pfp" />
                <h2>Shubham</h2>
            </div>
        </nav>
    )
}

export default NavBar
