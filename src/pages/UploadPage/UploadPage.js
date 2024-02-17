import publishIcon from "../../assets/images/publish.svg";
import uploadPreview from "../../assets/images/Upload-video-preview.jpg";
import "./UploadPage.scss";
import { Link } from "react-router-dom";

const UploadPage = () => {
  const handleClick = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <hr className="divider"></hr>
      <section className="upload-section">
        <h1 className="hero__heading">Upload Video</h1>
        <hr className="divider--upload"></hr>
        <p className="thumbnail">VIDEO THUMBNAIL</p>
        <img className="thumbnail__image" src={uploadPreview} />
        <form>
          <div className="form__upload">
            <label className="form__label">
              TITLE YOUR VIDEO
              <input
                type="text"
                className="form__input--title"
                placeholder="Add a title to your video"
              ></input>
            </label>
            <label className="form__label">
              ADD A VIDEO DESCRIPTION
              <textarea
                className="form__input--description"
                name="text"
                placeholder="Add a description to your video"
              ></textarea>
            </label>
          </div>
          <hr className="divider--upload"></hr>
          <Link to="/">
            <button className="form__button--publish">
              <img className="button-icon" src={publishIcon} alt="icon" />
              PUBLISH
            </button>
          </Link>
          <button className="form__button--cancel" onClick={handleClick}>
            CANCEL
          </button>
        </form>
      </section>
    </>
  );
};

export default UploadPage;
