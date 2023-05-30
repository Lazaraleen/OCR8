import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../assets/images/LOGO.png';
import '../style/Header.css';

function Header() {
    return (
        <div className='headdiv'>
            <img src={logo} className="Kasalogo" alt="logo de Kasa" />
            <nav>
                <ul>
                <NavLink to="/" activeClassName="activeLink">
                    <li>Accueil</li>
                </NavLink>
                <NavLink to="/about" activeClassName="activeLink">
                    <li>A Propos</li>
                </NavLink>
                </ul>
            </nav>
        </div>
    )
}

export default Header;