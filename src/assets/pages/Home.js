import React from "react";
import falaise from '../images/Falaise.png';
import Banner from "../../components/Banner";
import Card from "../../components/Card";
import '../../style/MainHome.css';


function Home() {
    return (
        <div className='mainhome'>
            <Banner image={falaise} namealt="falaise" h1="Chez vous, partout et ailleurs" />
            <Card />
        </div>
    )
}

export default Home;