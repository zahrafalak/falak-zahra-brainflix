import './Form.scss';
import avatarImage from '../../assets/images/Mohan-muruge.jpg';

function Form() {
    return (
        <>
            <section className='form__section'>
                <h4 className='form__heading'>3 comments</h4>
                <div class="form">
                    <img class="comments__avatar" src={avatarImage} alt="" />
                    <div>
                        <form class="form__fields">
                            <label class="form__label" for="user">NAME</label>
                            <input id="user" class="form__input" type="text" name="user" placeholder="Enter your name" />
                            <label class="form__label" for="comment">COMMENT</label>
                            <textarea id="comment" class="form__input--comment" name="text"
                                placeholder="Add a new comment"></textarea>
                            <button class="button">COMMENT</button>
                        </form>
                    </div>
                </div>
            </section>
            <hr class="divider"></hr>
        </>
    );
}

export default Form;
