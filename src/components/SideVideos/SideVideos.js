import './SideVideos.scss';

const SideVideos = ({ filteredArray, updateMainVideo }) => {
    return (
        <>
            <h4 className='sidevideo__heading'>NEXT VIDEOS</h4>
            {filteredArray.map((video) => {

                return (
                    <div key={video.id} className='sidevideo__card' onClick={() => { updateMainVideo(video.id); }}>
                        <img className="sidevideo__image" src={video.image} alt="" />
                        <section className='sidevideo__details'>
                            <h4 className='sidevideo__details--title'>{video.title}</h4>
                            <p className='sidevideo__details--channel'>{video.channel}</p>
                        </section>
                    </div>

                );
            })}
        </>
    );
}

export default SideVideos;