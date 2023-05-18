import React from "react";
import { NavLink } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import falaise from '../images/Falaise.png';
import MiseEnAvant from "../../components/MiseEnAvant";
import Logement from '../../logements.json';
import '../../style/MainHome.css';

function Location() {
    // const navigate = useNavigate();
    return (
        <div className='locations'>
            {Logement.map((detail) => {
                // const id = {detail.id};
                return (
                    // <div className="locate" key={detail.id} onClick= {() => {navigate('/fiche/' + id, {replace:"true"})}}>  
                    // <img src={detail.cover} />
                    <div className="locate" key={detail.id} >                 
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
            <MiseEnAvant image={falaise} namealt="falaise" h1="Chez vous, partout et ailleurs" />
            <Location />
        </div>
    )
}

export default Home;