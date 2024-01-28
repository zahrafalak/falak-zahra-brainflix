import videos from '../../data/video-details.json';
import sideVideosArray from '../../data/videos.json';

import Banner from '../../components/Banner/Banner';
import Hero from '../Hero/Hero';
import Comments from '../Comments/Comments';
import Form from '../Form/Form';
import SideVideosComponent from '../SideVideos/SideVideos';

import './Main.scss';
import { useState } from 'react';

const Main = () => {

    const [mainVideoID, setMainVideoID] = useState(videos[0].id);

    // This function takes in an ID and uses it to return the object associated 
    // with that id
    const getVideoFromID = (id) => {
        return videos.find((video) => video.id === id)
    }

    // This uses the ID stored in the mainVidoeState to get the object in the
    // video array associated with that ID
    const currentVideo = getVideoFromID(mainVideoID)

    // This uses the currentVideo obj and assigns it's comments into its own variable
    const currentVideoComments = currentVideo.comments

    // This is the setter function that the child component is using to update
    // the state in the parent component
    const updateMainVideo = (id) => { setMainVideoID(id) }


    // This funtions creates a new array that doesn't include the current video
    // stored in state
    const filteredArray = sideVideosArray.filter((sideVideo) => {
        return sideVideo.id !== currentVideo.id;
    });

    return (
        <>
            <Banner currentVideo={currentVideo} />
            <div className='video-details'>
                <div className='video-details--main'>
                    <Hero currentVideo={currentVideo} />
                    <Form />
                    <Comments comments={currentVideoComments} />
                </div>
                <div className='video-details--side'>
                    <SideVideosComponent
                        filteredArray={filteredArray}
                        updateMainVideo={updateMainVideo}
                    />
                </div>
            </div>
        </>
    );
}

export default Main;