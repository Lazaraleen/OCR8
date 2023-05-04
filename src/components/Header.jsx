import logo from '../assets/images/LOGO.png';
import '../style/Header.css';

function Header() {
    return (
        <div className='headdiv'>
            <img src={logo} className="Kasalogo" alt="logo de Kasa" />
            <nav>
                <ul>
                    <li>Accueil</li>
                    <li>A Propos</li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;