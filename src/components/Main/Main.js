import videos from '../../data/video-details.json';
import Hero from '../Hero/Hero';
import Comments from '../Comments/Comments';



const Main = () => {
    const firstVideoObj = videos[0];
    const firstVideoComments = firstVideoObj.comments;
    return (
        <>
            <Hero firstVideo={firstVideoObj} />
            <Comments comments={firstVideoComments} />
        </>
    );
}

export default Main;