import "./Comments.scss";

const VideoComments = ({ mainVideoData }) => {
  const comments = mainVideoData.comments;
  return (
    <>
      {comments ? (
        <>
          {comments.map((comment) => {
            return (
              <div key={comment.id}>
                <div className="comments" id={comment.id}>
                  <img className="comments__avatar" alt="" />
                  <div className="comments__details">
                    <section className="comments__data">
                      <h4 className="comments__data--name">{comment.name}</h4>
                      <p className="comments__data--time">
                        {formatDate(comment.timestamp)}
                      </p>
                    </section>
                    <p className="comments__text">{comment.comment}</p>
                  </div>
                </div>
                <hr className="comments__divider"></hr>
              </div>
            );
          })}
        </>
      ) : (
        "not loaded"
      )}
    </>
  );
};

function formatDate(timestamp) {
  const commentDate = new Date(timestamp);
  const formattedDate = `${("0" + (commentDate.getMonth() + 1)).slice(-2)}/${(
    "0" + commentDate.getDate()
  ).slice(-2)}/${commentDate.getFullYear()}`;
  return formattedDate;
}

export default VideoComments;
