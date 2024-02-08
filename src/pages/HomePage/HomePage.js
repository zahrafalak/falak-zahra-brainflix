import videos from '../../data/video-details.json';
import sideVideosArray from '../../data/videos.json';

import Banner from '../../components/Banner/Banner';
import Hero from '../../components/Hero/Hero';
import Comments from '../../components/Comments/Comments';
import Form from '../../components/Form/Form';
import SideVideosComponent from '../../components/SideVideos/SideVideos';

import './HomePage.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';

const HomePage = () => {

    const [mainVideoID, setMainVideoID] = useState("84e96018-4022-434e-80bf-000ce4cd12b8");
    const [mainVideoData, setMainVideoData] = useState(null); // Initialize mainVideoData state variable to null
    const [isLoaded, setIsloaded] = useState(false)
    const apiKey = "2d8b3e97-9324-4fa1-9840-920c9b5b7921";
    const baseURL = "https://project-2-api.herokuapp.com";

    useEffect(() => {
        const fetchMainVideo = async () => {
            try {
                setIsloaded(false)
                const response = await axios.get(`${baseURL}/videos/${mainVideoID}?api_key=${apiKey}`);
                const mainVideoData = response.data;
                setMainVideoData(mainVideoData);
                // Set main video data in state or do whatever you want with it
                setIsloaded(true)
            } catch (error) {
                console.error("Error fetching main video:", error);
            }
        };
        fetchMainVideo();
    }, [mainVideoID]);

    // // This function takes in an ID and uses it to return the object associated 
    // // with that id
    // const getVideoFromID = (id) => {
    //     return videos.find((video) => video.id === id)
    // }

    // // This uses the ID stored in the mainVidoeState to get the object in the
    // // video array associated with that ID
    // const currentVideo = getVideoFromID(mainVideoID)

    // // This uses the currentVideo obj and assigns it's comments into its own variable
    // const currentVideoComments = currentVideo.comments

    // // This is the setter function that the child component is using to update
    // // the state in the parent component
    // const updateMainVideo = (id) => { setMainVideoID(id) }


    // // This funtions creates a new array that doesn't include the current video
    // // stored in state
    // const filteredArray = sideVideosArray.filter((sideVideo) => {
    //     return sideVideo.id !== currentVideo.id;
    // });

    return (
        <>
            {isLoaded ?
                <>
                    {console.log(mainVideoData)}
                    {mainVideoData && <Banner mainVideoData={mainVideoData} />}
                    <div className='video-details'>
                        <div className='video-details--main'>
                            <Hero mainVideoData={mainVideoData} />
                            <Form />
                            <Comments mainVideoData={mainVideoData} />
                        </div>
                        {/* <div className='video-details--side'>
                    <SideVideosComponent
                        filteredArray={filteredArray}
                        updateMainVideo={updateMainVideo}
                    />
                </div> */}
                    </div>
                </>
                : "Loading"}
        </>

    );
}

export default HomePage;