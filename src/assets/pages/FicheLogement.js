import React, { useState } from "react";
import { useParams } from 'react-router-dom';
import RatingStars from "../../components/RatingStar";
import Slider from "../../components/Slider";
import flecheD from '../images/rightArrow.png';
import flecheG from '../images/leftArrow.png';
import Logement from '../../logements.json';
import '../../style/MainLogement.css';


function ImageLogement() {
    const {id} = useParams()
    const destination = Logement.filter((lieu) => lieu.id === id);
    const nbPictures = destination[0].pictures.length;

    return (
        <div className='miseenavant'>
            <Slider nbPictures={nbPictures} destination={destination[0]} />
            {/* <img src={destination[0].pictures[0]} className="lieu1" alt="lieu1" />
            {/* Faire avancer le compteur d'images et défiler les images en cliquant sur les flèches */}
            {/* <div className="counter">1 / {nbPictures}</div>
            <img src={flecheG} alt="flèche gauche" className="arrow arrow_left" />
            <img src={flecheD} alt="flèche droite" className="arrow arrow_right" /> */} 
        </div>
    )
}

function SectionLogement1() {
    const {id} = useParams()
    const destination = Logement.filter((lieu) => lieu.id === id);
    const tags = destination[0].tags;

    return (
        <section className="section1">
            <article className="article1">
                <h2>{destination[0].title}</h2>
                <p>{destination[0].location}</p>

                <span className="filtre">
                    {tags.map((detail, index) => {
                        return (
                            <div>
                                <p key={index}>{detail}</p>  
                            </div>
                        )
                    })}
                </span>
            </article>
            <article className="article2">
                <span>
                    <div className="name">
                        <p>{destination[0].host.name}</p>
                    </div>
                    <div><img src={destination[0].host.picture} className="avatar" alt="avatar" /></div>
                </span>
                <RatingStars props={destination[0].rating} />
            </article>
        </section>
    )
}

function SectionLogement2() {
    const {id} = useParams()
    const destination = Logement.filter((lieu) => lieu.id === id);
    const equipement = destination[0].equipments;
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    // Prévoir de faire un component Collapse
    return (
        <section className="section2">
            <article>
                <span onClick={() => {setOpen(!open)}}>
                    <p>Description</p>
                    <img src={open ? flecheG : flecheD} alt="flèche" />
                </span>
                {open && <div><p>{destination[0].description}</p> </div>}             
            </article>
            <article>
                <span onClick={() => {setOpen2(!open2)}}>
                    <p>Équipements</p>
                    <img src={open ? flecheG : flecheD} alt="flèche" />
                </span>
                {open2 &&
                    <div>
                        {equipement.map((detail, index) => {
                            return (
                                <p key={index}>{detail}</p>  
                            )
                        })}
                    </div>
                }
            </article>
        </section>
    )
}

function FicheLogement() {
    return (
        <div className='mainlogement'>
            <ImageLogement />
            <SectionLogement1 />
            <SectionLogement2 />
        </div>
    )
}

export default FicheLogement;