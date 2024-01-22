import videos from '../../data/video-details.json';
import Hero from '../Hero/Hero';



const Main = () => {
    const firstVideoObj = videos[0];

    return (
        <>
            <Hero firstVideo={firstVideoObj} />
        </>
    );
}

export default Main;