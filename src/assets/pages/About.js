import React from "react";
import Montagne from '../images/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png';
import MiseEnAvant from "../../components/MiseEnAvant";
import Collapse from "../../components/Collapse";
import '../../style/About.css';

const aboutsection = [
    {
        title: "Fiabilité",
        texte: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
    },
    {
        title: "Respect",
        texte: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
    },
    {
        title: "Service",
        texte: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
    },
    {
        title: "Sécurité",
        texte: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
    }
]


function SectionAbout() {


    return (
        <section className="sectionAbout">
            {aboutsection.map((item, i) => (
                <article key={i+'A'}>
                    <Collapse title={item.title} texte={item.texte} i={i} />
                </article>
            ))}
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