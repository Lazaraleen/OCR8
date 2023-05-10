import React from "react";
import { NavLink } from "react-router-dom";
import falaise from '../images/Falaise.png';
// import anonyme from '../assets/images/anonyme.jpg';
import Logement from '../../logements.json';
import '../../style/MainHome.css';


function MiseEnAvant() {
    return (
        <div className='miseenavant marge'>
            <img src={falaise} className="falaise" alt="falaise" />   
            <h1>Chez vous, partout et ailleurs</h1>         
        </div>
    )
}

function Location() {
    return (
        <div className='locations'>
            {Logement.map((detail) => {
                return (
                    <div className="locate" key={detail.id}>
                        <NavLink to={`/fiche/${detail.id}`}><img src={detail.cover} /></NavLink> 
                        <p>{detail.title}</p>
                    </div>
                )
            })}            
        </div>
    );
}

function Home() {
    return (
        <div className='mainhome'>
            <MiseEnAvant />
            <Location />
        </div>
    )
}

export default Home;