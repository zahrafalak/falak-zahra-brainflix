import videos from '../../data/video-details.json';
import sideVideos from '../../data/videos.json';
import Hero from '../Hero/Hero';
import Comments from '../Comments/Comments';
import Form from '../Form/Form';
import SideVideos from '../SideVideos/SideVideos';
import { useState } from 'react';



const Main = () => {

    const [videoIndex, setVideoIndex] = useState(0);
    const commentsArray = videos[videoIndex].comments;

    const sideVideosArray = sideVideos;

    return (
        <>

            <Hero currentVideo={videos[videoIndex]} />
            <div>
                <button onClick={() => { setVideoIndex(0) }}>First video</button>
                <button onClick={() => { setVideoIndex(1) }}>Second video</button>
                <button onClick={() => { setVideoIndex(2) }}>Third video</button>
            </div>
            <Form />
            <Comments comments={commentsArray} />
            <SideVideos sideVideosArray={sideVideosArray} />


        </>
    );
}

export default Main;