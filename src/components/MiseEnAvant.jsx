import React from "react";


function MiseEnAvant(props) {
    return (
        <div className='miseenavant'>
            <img src={props.image} className={props.namealt} alt={props.namealt} />
            <h1>{props.h1}</h1>
        </div>
    )
}

export default MiseEnAvant;