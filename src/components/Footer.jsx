import React from "react";
// import { NavLink } from "react-router-dom";
import logoblanc from '../assets/images/LOGOblanc.png';
import '../style/Footer.css';

function Footer() {
    return (
        <div className='footerdiv'>
            <img src={logoblanc} className="logoblanc" alt="logo de Kasa" />
            <h5>© 2020 Kasa. All rights reserved</h5>
        </div>
    )
}

export default Footer;