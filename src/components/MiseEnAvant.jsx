import React from "react";


function MiseEnAvant(props) {
    return (
        <div className='miseenavant'>
            <img src={props.image} className={props.namealt} alt={props.namealt} />
        </div>
    )
}

export default MiseEnAvant;