import '../style/Main404.css';

function Message() {
    return (
        <div className='erreur'>
            <h6>404</h6>
            <h2>Oups! La page que vous demandez n'existe pas.</h2>
        </div>
    )
}

function Lien() {
    return (
        <div className='lien'>
            <a href='./Home.js'>Retourner sur la page d’accueil</a>
        </div>
    )
}

function Main404() {
    return (
        <div className='mainhome'>
            <Message />
            <Lien />
        </div>
    )
}

export default Main404;