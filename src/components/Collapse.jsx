import React from "react";
import { useState } from "react";
import flecheD from '../assets/images/rightArrow.png';
import flecheG from '../assets/images/leftArrow.png';

function Collapse(props) {
    const [selected, setSelected] = useState(null);
    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null)
        }
        setSelected(i)
    }
    return (
        <>
        <span className="spantitle" onClick={() => toggle(props.i)}>
            <span className="spanP">{props.title}</span>
            <img src={selected === props.i ? flecheG : flecheD} alt="flèche" />
        </span>
        <div className={selected === props.i ? 'texte show' : 'texte'}>
            <span className="spanP">{props.texte}</span>                    
        </div>
        </>
    )
}

export default Collapse;