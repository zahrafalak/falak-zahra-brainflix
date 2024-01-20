import brainflixLogo from '../../assets/images/BrainFlix-logo.svg';
import avatar from '../../assets/images/Mohan-muruge.jpg';
import uploadIcon from '../../assets/images/upload.svg';
import './Header.scss';
function Header() {
    return (
        <>
            <img className="header__logo" src={brainflixLogo} alt="Brainflix logo" />
            <form className="header__searchbar">
                <input className="header__searchbar--input" type="search" placeholder="Search"></input>
                <img className="header__avatar" src={avatar} alt="avatar" />
            </form>

            <button className="header__button">
                <img className='button-icon' src={uploadIcon} alt="icon" />
                <span>UPLOAD</span>
            </button>

        </>
    )
}

export default Header;