import publishIcon from "../../assets/images/publish.svg";
import uploadPreview from "../../assets/images/Upload-video-preview.jpg";
const UploadPage = () => {
  return (
    <>
      <h1>Upload Video</h1>
      <p>VIDEO THUMBNAIL</p>
      <img class="" src={uploadPreview} />
      <form className="form__fields">
        <label className="form__label">TITLE YOUR VIDEO</label>
        <textarea
          type="text"
          className="form__input"
          placeholder="Add a title to your video"
        ></textarea>
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
      </form>
    </>
  );
};

export default UploadPage;
