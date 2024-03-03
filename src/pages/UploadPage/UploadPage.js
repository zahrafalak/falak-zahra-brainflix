import publishIcon from "../../assets/images/publish.svg";
import uploadPreview from "../../assets/images/Upload-video-preview.jpg";
import "./UploadPage.scss";
import { useRef } from "react";
import axios from "axios";

const baseURL = "http://localhost:8080";
const videosEndpoint = "videos";

const UploadPage = () => {
  const formRef = useRef();
  const addVideo = async (e) => {
    e.preventDefault();
    const { title, description } = formRef.current;
    await axios.post(`${baseURL}/${videosEndpoint}`, {
      title: title.value,
      description: description.value,
      image: "http://localhost:8080/images/cute-cat.jpg",
    });
    alert("Video Uploaded");
  };
  return (
    <>
      <hr className="divider"></hr>
      <section className="upload-section">
        <h1 className="hero__heading">Upload Video</h1>
        <hr className="divider--upload"></hr>
        <p className="thumbnail">VIDEO THUMBNAIL</p>
        <img className="thumbnail__image" src={uploadPreview} />
        <form ref={formRef} onSubmit={addVideo}>
          <div className="form__upload">
            <label className="form__label" htmlFor="title">
              TITLE YOUR VIDEO
              <input
                name="title"
                type="text"
                className="form__input--title"
                placeholder="Add a title to your video"
              ></input>
            </label>
            <label className="form__label" htmlFor="description">
              ADD A VIDEO DESCRIPTION
              <textarea
                className="form__input--description"
                name="description"
                placeholder="Add a description to your video"
              ></textarea>
            </label>
          </div>
          <hr className="divider--upload"></hr>

          <button className="form__button--publish">
            <img className="button-icon" src={publishIcon} alt="icon" />
            PUBLISH
          </button>

          <button className="form__button--cancel">CANCEL</button>
        </form>
      </section>
    </>
  );
};

export default UploadPage;
