<<<<<<< HEAD
function Header() {
    return (
        <>
        </>
    )
}
=======
import brainflixLogo from '../../assets/images/BrainFlix-logo.svg';
import avatar from '../../assets/images/Mohan-muruge.jpg';
import uploadIcon from '../../assets/images/upload.svg';
import './Header.scss';
const Header = () => {
    return (
        <>
            <header className='header'>
                <img className="header__logo" src={brainflixLogo} alt="Brainflix logo" />
                <input className="header__searchbar" type="search" placeholder="Search"></input>
                <img className="header__avatar" src={avatar} alt="avatar" />
                <button className="header__button">
                    <img className='button-icon' src={uploadIcon} alt="icon" />
                    <span>UPLOAD</span>
                </button>
            </header>
        </>
    )
}

export default Header;
>>>>>>> create-header
