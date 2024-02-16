import brainflixLogo from "../../assets/images/BrainFlix-logo.svg";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import uploadIcon from "../../assets/images/upload.svg";
import "./Header.scss";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <header className="header">
        <Link to="/">
          <img
            className="header__logo"
            src={brainflixLogo}
            alt="Brainflix logo"
          />
        </Link>
        <input
          className="header__searchbar"
          type="search"
          placeholder="Search"
        ></input>
        <img className="header__avatar" src={avatar} alt="avatar" />
        <Link to="/upload" className="link">
          <button className="header__button">
            <img className="button-icon" src={uploadIcon} alt="icon" />
            UPLOAD
          </button>
        </Link>
      </header>
    </>
  );
};

export default Header;
