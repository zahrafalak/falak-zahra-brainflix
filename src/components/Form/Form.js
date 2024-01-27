import './Form.scss';
import avatarImage from '../../assets/images/Mohan-muruge.jpg';
import commentIcon from '../../assets/images/add_comment.svg';

function Form() {
    return (
        <>
            <section className='form__section'>
                <h4 className='form__heading'>3 comments</h4>
                <div className="form">
                    <img className="comments__avatar" src={avatarImage} alt="" />
                    <form className="form__fields">
                        <div>
                            <label className="form__label" htmlFor="comment">JOIN THE CONVERSATION</label>
                            <textarea id="comment" className="form__input--comment" name="text"
                                placeholder="Add a new comment"></textarea>
                        </div>
                        <button className="form__button">
                            <img className='button-icon' src={commentIcon} alt="icon" />
                            <span>COMMENT</span>
                        </button>
                    </form>
                </div>
            </section>
            <hr className="divider"></hr>
        </>
    );
}

export default Form;

