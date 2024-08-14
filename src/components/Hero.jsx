import logo from '../../public/images/airbnb-logo.png';
import photoGrid from '../../public/images/photo-grid.png';

export default function Hero(){
    return (
        <>
        <nav className='nav-bar'>
            <img src={logo}></img>
        </nav>

        <div className="photo-grid">
            <img src={photoGrid}></img>
        </div>

        <div className="hero-text">
            <h1 className="hero-title">Online Experiences</h1>

            <h3 className="hero-description">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </h3>
        </div>
        </>
    )
}