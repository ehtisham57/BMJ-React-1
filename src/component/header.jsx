import React from 'react'
import logo from './images/logo.png'
import './header.css'
const Header = ()=>{
    return(
        <div className="main-head">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="nav-bar">
                <ul>
                    <li>HOME</li>
                    <li>ABOUT</li>
                    <li>CONTACT</li>
                    <li>SERVICES</li>
                </ul>
            </div>
        </div>
    )
}

export default Header 