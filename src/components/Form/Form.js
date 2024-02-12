import "./Form.scss";
import avatarImage from "../../assets/images/Mohan-muruge.jpg";
import commentIcon from "../../assets/images/add_comment.svg";

const Form = ({ mainVideoData }) => {
  return (
    <section className="form-section">
      <h4 className="form-section__heading">{`${mainVideoData.comments.length} comments`}</h4>
      <div className="form">
        <img className="comments__avatar" src={avatarImage} alt="" />
        <form className="form__fields">
          <div className="form__block">
            <label className="form__label" htmlFor="comment">
              JOIN THE CONVERSATION
            </label>
            <textarea
              className="form__input"
              name="text"
              placeholder="Add a new comment"
            ></textarea>
          </div>
          <button className="form__button">
            <img className="button-icon" src={commentIcon} alt="icon" />
            <span>COMMENT</span>
          </button>
        </form>
      </div>
      <hr className="divider"></hr>
    </section>
  );
};

export default Form;
