const Banner = ({ mainVideoData }) => {
  return (
    <div className="hero__banner">
      <video
        className="hero__video"
        controls
        poster={mainVideoData.image}
      ></video>
    </div>
  );
};

export default Banner;
