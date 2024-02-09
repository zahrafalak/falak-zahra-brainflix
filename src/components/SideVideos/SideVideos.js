import "./SideVideos.scss";
import { Link } from "react-router-dom";

const SideVideos = ({ sideVideos }) => {
  return (
    <div className="sidevideo">
      <h4 className="sidevideo__heading">NEXT VIDEOS</h4>
      {sideVideos.map((video) => {
        return (
          <Link
            key={video.id}
            to={`/videos/${video.id}`}
            className="sidevideo__card"
          >
            <img className="sidevideo__image" src={video.image} alt="" />
            <section className="sidevideo__details">
              <h4 className="sidevideo__details--title">{video.title}</h4>
              <p className="sidevideo__details--channel">{video.channel}</p>
            </section>
          </Link>
        );
      })}
    </div>
  );
};

export default SideVideos;
