import './SideVideos.scss';

const SideVideos = ({ sideVideos }) => {
    return (
        <div className='sidevideo'>
            <h4 className='sidevideo__heading'>NEXT VIDEOS</h4>
            {sideVideos.map((video) => {
                return (
                    <div key={video.id} className='sidevideo__card'>
                        <img className="sidevideo__image" src={video.image} alt="" />
                        <section className='sidevideo__details'>
                            <h4 className='sidevideo__details--title'>{video.title}</h4>
                            <p className='sidevideo__details--channel'>{video.channel}</p>
                        </section>
                    </div>

                );
            })}
        </div>
    );
}

export default SideVideos;