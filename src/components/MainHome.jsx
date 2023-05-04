import falaise from '../assets/images/Falaise.png';
import '../style/MainHome.css';

function MiseEnAvant() {
    return (
        <div className='miseenavant'>
            <img src={falaise} className="falaise" alt="falaise" />   
            <h1>Chez vous, partout et ailleurs</h1>         
        </div>
    )
}

function Location() {
    return (
        <div className='locations'>
            <div className="locate">
                <p>Titre de la location</p>
            </div>
        </div>
    )
}

function MainHome() {
    return (
        <div className='mainhome'>
            <MiseEnAvant />
            <Location />
        </div>
    )
}

export default MainHome;