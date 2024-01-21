import './Hero.scss';
import videos from '../../data/video-details.json';
import viewsIcon from '../../assets/images/views.svg';
import likesIcon from '../../assets/images/likes.svg';
console.log(videos);
function Hero() {
    return (
        <>
            <div className='hero__banner'>
                <video className="hero__video" controls poster={videos[0].image} ></video>
            </div>

            <section className='hero'>
                <h1 className='hero__heading'>{videos[0].title}</h1>
                <hr className='divider--hero-top'></hr>
                <div className='hero__details'>
                    <div className='hero__details--left'>
                        <p className='hero__data--channel'>By {videos[0].channel}</p>
                        <p className='hero__data'>{formatDate(videos[0].timestamp)}</p>
                    </div>
                    <div className='hero__details--right'>
                        <div>
                            <img className='hero__icons' src={viewsIcon} alt="views icon" />
                            <p className='hero__data'>{videos[0].views}</p>
                        </div>
                        <div>
                            <img className='hero__icons' src={likesIcon} alt="" />
                            <p className='hero__data'>{videos[0].likes}</p>
                        </div>
                    </div>
                </div>
                <hr className='divider'></hr>
                <p className='hero__description'>{videos[0].description}</p>
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