

const Banner = (props) => {
    const currentVideo = props.currentVideo;
    return (
        < div className='hero__banner' >
            <video className="hero__video" controls poster={currentVideo.image} ></video>
        </div >
    )

}

export default Banner;