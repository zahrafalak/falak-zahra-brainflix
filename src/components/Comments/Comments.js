import videos from '../../data/video-details.json'
import './Comments.scss';

function VideoComments() {


    const firstVideoCommentArray = videos[0].comments;
    return (
        <>
            {firstVideoCommentArray.map((props) => {
                return (
                    <>
                        <div className='comments'>
                            <img className='comments__avatar' alt="" />
                            <div className='comments__details'>
                                <section className='comments__data'>
                                    <h4 className='comments__data--name'>{props.name}</h4>
                                    <p className='comments__data--time'>{formatDate(props.timestamp)}</p>
                                </section>
                                <p className='comments__text'>{props.comment}</p>
                            </div>
                        </div>
                        <hr className='comments__divider'></hr>
                    </>
                );
            })}
        </>
    );
}

function formatDate(timestamp) {
    const commentDate = new Date(timestamp);
    const formattedDate = `${("0" + (commentDate.getMonth() + 1)).slice(-2)}/${("0" + commentDate.getDate()).slice(-2)}/ ${commentDate.getFullYear()}`;
    return formattedDate;
}

export default VideoComments;