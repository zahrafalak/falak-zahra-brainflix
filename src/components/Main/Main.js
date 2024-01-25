import videos from '../../data/video-details.json';
import Hero from '../Hero/Hero';
import Comments from '../Comments/Comments';
import Form from '../Form/Form';



const Main = () => {
    const firstVideoObj = videos[0];
    const firstVideoComments = firstVideoObj.comments;
    return (
        <>
            <Hero firstVideo={firstVideoObj} />
            <Form />
            <Comments comments={firstVideoComments} />
        </>
    );
}

export default Main;