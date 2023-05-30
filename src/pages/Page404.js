import React from "react";
import { NavLink } from "react-router-dom";
import '../style/Main404.css';

function Page404() {
    return (
        <div className='mainhome'>
            <div className='erreur'>
                <h6>404</h6>
                <h2>Oups! La page que vous demandez n'existe pas.</h2>
            </div>
            <div className='lien'>
                <NavLink to="/">
                    <p className="lienAccueil">Retourner sur la page d’accueil</p>
                </NavLink>
            </div>
        </div>
    )
}

export default Page404;