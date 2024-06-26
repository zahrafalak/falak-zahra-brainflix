import avatarImage from "../../assets/images/Mohan-muruge.jpg";
import commentIcon from "../../assets/images/add_comment.svg";
import axios from "axios";
import { useRef } from "react";
import { useParams } from "react-router-dom";

const baseURL = "http://localhost:8080";

const Form = ({ mainVideoData, updateComments }) => {
  const formRef = useRef();
  const { id } = useParams();

  const postComment = async (e) => {
    e.preventDefault();
    const { comment } = formRef.current;
    if (id) {
      await axios.post(`${baseURL}/videos/${id}/comments`, {
        user: "Some User",
        comment: comment.value,
      });
    } else {
      const firstVideoID = mainVideoData.id;
      await axios.post(`${baseURL}/videos/${firstVideoID}/comments`, {
        user: "Some User",
        comment: comment.value,
      });
    }
    updateComments();
    comment.value = "";
  };

  return (
    <>
      {mainVideoData && mainVideoData.comments ? (
        <section className="form-section">
          <h4 className="form-section__heading">{`${mainVideoData.comments.length} comments`}</h4>
          <div className="form">
            <img className="comments__avatar" src={avatarImage} alt="" />
            <form className="form__fields" ref={formRef} onSubmit={postComment}>
              <div className="form__block">
                <label className="form__label" htmlFor="comment">
                  JOIN THE CONVERSATION
                  <textarea
                    className="form__input"
                    name="comment"
                    placeholder="Add a new comment"
                    required
                  ></textarea>
                </label>
              </div>
              <button className="form__button">
                <img className="button-icon" src={commentIcon} alt="icon" />
                COMMENT
              </button>
            </form>
          </div>
          <hr className="divider"></hr>
        </section>
      ) : (
        <></>
      )}
    </>
  );
};

export default Form;
