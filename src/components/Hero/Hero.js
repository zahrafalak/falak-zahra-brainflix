import "./Hero.scss";
import viewsIcon from "../../assets/images/views.svg";
import likesIcon from "../../assets/images/likes.svg";

const Hero = ({ mainVideoData }) => {
  return (
    <>
      <section className="hero">
        <h1 className="hero__heading">{mainVideoData.title}</h1>
        <hr className="divider--hero-top"></hr>
        <div className="hero__details">
          <div className="hero__details--left">
            <p className="hero__data--channel">By {mainVideoData.channel}</p>
            <p className="hero__data">{formatDate(mainVideoData.timestamp)}</p>
          </div>
          <div className="hero__details--right">
            <div>
              <img className="hero__icons" src={viewsIcon} alt="views icon" />
              <p className="hero__data">{mainVideoData.views}</p>
            </div>
            <div>
              <img className="hero__icons" src={likesIcon} alt="" />
              <p className="hero__data">{mainVideoData.likes}</p>
            </div>
          </div>
        </div>
        <hr className="divider"></hr>
        <p className="hero__description">{mainVideoData.description}</p>
      </section>
    </>
  );
};

function formatDate(timestamp) {
  const commentDate = new Date(timestamp);
  const formattedDate = `${("0" + (commentDate.getMonth() + 1)).slice(-2)}/${(
    "0" + commentDate.getDate()
  ).slice(-2)}/${commentDate.getFullYear()}`;
  return formattedDate;
}

export default Hero;
