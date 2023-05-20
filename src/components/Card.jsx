import React from "react";
import { NavLink } from "react-router-dom";
import Logement from '../logements.json';
import '../style/MainHome.css';


function Card() {
    return (
        <div className='locations'>
            {Logement.map((detail) => {
                return (
                    <div className="locate" key={detail.id}>
                        <NavLink to={`/fiche/${detail.id}`}><img src={detail.cover} alt={detail.title}/></NavLink> 
                        <p>{detail.title}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Card;