import React from "react";
import { NavLink } from "react-router-dom";
import falaise from '../assets/images/Falaise.png';
import anonyme from '../assets/images/anonyme.jpg';
import '../style/MainHome.css';


function MiseEnAvant() {
    return (
        <div className='miseenavant'>
            <img src={falaise} className="falaise" alt="falaise" />   
            <h1>Chez vous, partout et ailleurs</h1>         
        </div>
    )
}

function Location() {
    const lieux = [
        { id: 1, titre: "Titre de la location", image: anonyme},
        { id: 2, titre: "Titre de la location", image: anonyme},
        { id: 3, titre: "Titre de la location", image: anonyme},
        { id: 4, titre: "Titre de la location", image: anonyme},
        { id: 5, titre: "Titre de la location", image: anonyme},
        { id: 6, titre: "Titre de la location", image: anonyme},
    ];

    return (
        <div className='locations'>
            {lieux.map((lieu) => {
                return (<div className="locate">
                            <NavLink to="/fiche"><img src={lieu.image}></img></NavLink>                            
                            <p>{lieu.titre}</p>
                        </div> );
            })}            
        </div>
    );
}

function MainHome() {
    return (
        <div className='mainhome'>
            <MiseEnAvant />
            <Location />
        </div>
    )
}

export default MainHome;