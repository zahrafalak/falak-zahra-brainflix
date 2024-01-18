import brainflixLogo from '../../assets/images/BrainFlix-logo.svg';
import avatar from '../../assets/images/Mohan-muruge.jpg';
import './Header.scss';
function Header() {
    return (
        <>
            <img className="header__logo" src={brainflixLogo} alt="Brainflix logo" />
            <form className="header__searchbar">
                <input className="header__searchbar--input" type="search" placeholder="Search"></input>
            </form>
            <img className="header__avatar" src={avatar} />
            <button classname="header__button">UPLOAD</button>

        </>
    )
}

export default Header;