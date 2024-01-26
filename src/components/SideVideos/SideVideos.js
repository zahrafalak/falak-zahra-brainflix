import './SideVideos.scss';

const SideVideos = ({ sideVideosArray }) => {
    return (
        <>
            <h4 className='sidevideo__heading'>NEXT VIDEOS</h4>
            {sideVideosArray.map((videos) => {
                return (
                    <div className='sidevideo__card'>
                        <img className="sidevideo__image" src={videos.image} alt="" />
                        <section className='sidevideo__details'>
                            <h4 className='sidevideo__details--title'>{videos.title}</h4>
                            <p className='sidevideo__details--channel'>{videos.channel}</p>
                        </section>
                    </div>
                );
            })}
        </>
    );
}

export default SideVideos;