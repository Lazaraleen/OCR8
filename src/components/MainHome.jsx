import falaise from '../assets/images/Falaise.png';
import '../style/MainHome.css';

function MainHome() {
    return (
        <div className='mainhome'>
            <div className='miseenavant'>
                <img src={falaise} className="falaise" alt="falaise" />   
                <h1>Chez vous, partout et ailleurs</h1>         
            </div>
        </div>
    )
}

export default MainHome;