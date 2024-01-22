import './Hero.scss';
import viewsIcon from '../../assets/images/views.svg';
import likesIcon from '../../assets/images/likes.svg';

const Hero = (props) => {
    const firstVideo = props.firstVideo;
    return (
        <>
            <div className='hero__banner'>
                <video className="hero__video" controls poster={firstVideo.image} ></video>
            </div>

            <section className='hero'>
                <h1 className='hero__heading'>{firstVideo.title}</h1>
                <hr className='divider--hero-top'></hr>
                <div className='hero__details'>
                    <div className='hero__details--left'>
                        <p className='hero__data--channel'>By {firstVideo.channel}</p>
                        <p className='hero__data'>{formatDate(firstVideo.timestamp)}</p>
                    </div>
                    <div className='hero__details--right'>
                        <div>
                            <img className='hero__icons' src={viewsIcon} alt="views icon" />
                            <p className='hero__data'>{firstVideo.views}</p>
                        </div>
                        <div>
                            <img className='hero__icons' src={likesIcon} alt="" />
                            <p className='hero__data'>{firstVideo.likes}</p>
                        </div>
                    </div>
                </div>
                <hr className='divider'></hr>
                <p className='hero__description'>{firstVideo.description}</p>
            </section>

        </>
    );
}

function formatDate(timestamp) {
    const commentDate = new Date(timestamp);
    const formattedDate = `${("0" + (commentDate.getMonth() + 1)).slice(-2)}/${("0" + commentDate.getDate()).slice(-2)}/ ${commentDate.getFullYear()}`;
    return formattedDate;
}

export default Hero;