import React from "react";
import lieu1 from '../assets/images/lieu1.jpg';
import staractive from '../assets/images/star-active.png';
import starinactive from '../assets/images/star-inactive.png';
import '../style/MainLogement.css';


function ImageLogement() {
    return (
        <div className='miseenavant'>
            <img src={lieu1} className="lieu1" alt="lieu1" /> 
        </div>
    )
}

function SectionLogement1() {
    return (
        <section>
            <article className="article1">
                <h2>Cozy loft on the Canal Saint-Martin</h2>
                <p>Paris, Île-de-France</p>
                <span className="filtre">
                    <div>Cozy</div>
                    <div>Canal</div>
                    <div>Paris 10</div>
                </span>
            </article>
            <article className="article2">
                <span>
                    <div className="name">
                        <p>Alexandre</p>
                        <p>Dumas</p>
                    </div>
                    <div className="circle"></div>
                </span>
                <span className="star">
                    <img src={staractive} />
                    <img src={staractive} />
                    <img src={staractive} />
                    <img src={starinactive} />
                    <img src={starinactive} />
                </span>
                
            </article>
        </section>
    )
}


function MainLogement() {
    return (
        <div className='mainlogement'>
            <ImageLogement />
            <SectionLogement1 />
            {/* <SectionLogement2 /> */}
        </div>
    )
}

export default MainLogement;