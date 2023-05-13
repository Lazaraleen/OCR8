import React from "react";
import { NavLink } from "react-router-dom";
import '../../style/Main404.css';

function Message() {
    return (
        <div className='erreur'>
            <h6>404</h6>
            <h2>Oups! La page que vous demandez n'existe pas.</h2>
        </div>
    )
}

function Lien() {
    return (        
        <div className='lien'>
            <NavLink to="/">
                <p className="lienAccueil">Retourner sur la page d’accueil</p>
            </NavLink>
        </div>
    )
}

function Page404() {
    return (
        <div className='mainhome'>
            <Message />
            <Lien />
        </div>
    )
}

export default Page404;