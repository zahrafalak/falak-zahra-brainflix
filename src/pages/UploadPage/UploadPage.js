import publishIcon from "../../assets/images/publish.svg";
import uploadPreview from "../../assets/images/Upload-video-preview.jpg";
import "./UploadPage.scss";

const UploadPage = () => {
  return (
    <>
      <hr className="divider"></hr>
      <section className="upload-section">
        <h1 className="hero__heading">Upload Video</h1>
        <p className="thumbnail">VIDEO THUMBNAIL</p>
        <img class="thumbnail__image" src={uploadPreview} />
        <form className="form__fields">
          <label className="form__label">TITLE YOUR VIDEO</label>
          <input
            type="text"
            className="form__input--title"
            placeholder="Add a title to your video"
          ></input>
          <label className="form__label">ADD A NEW VIDEO DESCRIPTION</label>
          <textarea
            className="form__input"
            name="text"
            placeholder="Add a description to your video"
          ></textarea>

          <button className="form__button">
            <img className="button-icon" src={publishIcon} alt="icon" />
            <span>PUBLISH</span>
          </button>
          <button className="form__button--cancel">CANCEL</button>
        </form>
      </section>
    </>
  );
};

export default UploadPage;
