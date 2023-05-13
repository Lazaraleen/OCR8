import React, { useState } from "react";
import { useParams } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import { useEffect } from "react";
import RatingStars from "../../components/RatingStar";
import Slideshow  from "../../components/Slideshow ";
import flecheD from '../images/rightArrow.png';
import flecheG from '../images/leftArrow.png';
import Logement from '../../logements.json';
import '../../style/MainLogement.css';


function ImageLogement() {
    const {id} = useParams();

    const destination = Logement.filter((lieu) => lieu.id === id);
    const nbPictures = destination[0].pictures.length;

    return (
        <div className='miseenavant'>
            <Slideshow  nbPictures={nbPictures} destination={destination[0]} />
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
                <h2 className="droite">{destination[0].title}</h2>
                <p>{destination[0].location}</p>

                <span className="filtre">
                    {tags.map((detail, index) => {
                        return (
                            <div>
                                <p key={destination[0].id+index}>{detail}</p> 
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