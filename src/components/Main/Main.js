import videos from '../../data/video-details.json';
import sideVideos from '../../data/videos.json';
import Hero from '../Hero/Hero';
import Comments from '../Comments/Comments';
import Form from '../Form/Form';
import SideVideos from '../SideVideos/SideVideos';
import { useState } from 'react';



const Main = () => {

    const [videoIndex, setVideoIndex] = useState(0);
    const updateIndex = (id) => { setVideoIndex(id) }
    const commentsArray = videos[videoIndex].comments;

    const mainVideos = videos;
    const sideVideosArray = sideVideos;

    return (
        <>

            <Hero currentVideo={videos[videoIndex]} />
            <Form />
            <Comments comments={commentsArray} />
            <SideVideos sideVideosArray={sideVideosArray} mainVideos={mainVideos} updateIndex={updateIndex} />


        </>
    );
}

export default Main;