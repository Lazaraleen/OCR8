import React from "react";
import flecheD from '../images/rightArrow.png';
import Montagne from '../images/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png';
import MiseEnAvant from "../../components/MiseEnAvant";
import '../../style/About.css';


function SectionAbout() {
    // Prévoir de faire un component Collapse
    return (
        <section className="sectionAbout">
            <article>
                <span>
                    <p>Fiabilité</p>
                    <img src={flecheD} alt="flèche" />
                </span>
                <div>
                    <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</p>                    
                </div>
            </article>
            <article>
                <span>
                    <p>Respect</p>
                    <img src={flecheD} alt="flèche" />
                </span>
                <div>
                    <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>                    
                </div>
            </article>
            <article>
                <span>
                    <p>Service</p>
                    <img src={flecheD} alt="flèche" />
                </span>
                <div>
                    <p>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>                    
                </div>
            </article>
            <article>
                <span>
                    <p>Sécurité</p>
                    <img src={flecheD} alt="flèche" />
                </span>
                <div>
                    <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>                    
                </div>
            </article>
        </section>
    )
}

function About() {
    return (
        <div className='mainAbout'>
            <MiseEnAvant image={Montagne} namealt="lieu2" />
            <SectionAbout />
        </div>
    )
}

export default About;