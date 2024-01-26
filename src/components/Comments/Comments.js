import './Comments.scss';

const VideoComments = (props) => {
    const videoComments = props.comments;
    return (
        <>
            {videoComments.map((comments, index) => {
                return (
                    <>
                        <div className='comments' id={index}>
                            <img className='comments__avatar' alt="" />
                            <div className='comments__details'>
                                <section className='comments__data'>
                                    <h4 className='comments__data--name'>{comments.name}</h4>
                                    <p className='comments__data--time'>{formatDate(comments.timestamp)}</p>
                                </section>
                                <p className='comments__text'>{comments.comment}</p>
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