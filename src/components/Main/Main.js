import videos from '../../data/video-details.json';
import Hero from '../Hero/Hero';
import Comments from '../Comments/Comments';
import Form from '../Form/Form';
import { useState } from 'react';



const Main = () => {

    const [videoIndex, setVideoIndex] = useState(0)
    // const firstVideoComments = firstVideoObj.comments;
    const title = videos[videoIndex].title
    const commentsArray = videos[videoIndex].comments;
    return (
        <>
            <Hero currentVideo={videos[videoIndex]} />
            <Form />
            <Comments comments={commentsArray} />
            {title}

            <div>
                <button onClick={() => { setVideoIndex(0) }}>First video</button>
                <button onClick={() => { setVideoIndex(1) }}>Second video</button>
                <button onClick={() => { setVideoIndex(2) }}>Third video</button>
            </div>
        </>
    );
}

export default Main;