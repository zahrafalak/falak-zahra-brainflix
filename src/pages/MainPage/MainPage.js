import Banner from "../../components/Banner/Banner";
import Hero from "../../components/Hero/Hero";
import Comments from "../../components/Comments/Comments";
import Form from "../../components/Form/Form";
import SideVideosComponent from "../../components/SideVideos/SideVideos";

import "./MainPage.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const MainPage = () => {
  const { id } = useParams();

  const [mainVideoID, setMainVideoID] = useState("");
  const [mainVideoData, setMainVideoData] = useState(null);
  const [sideVideos, setSideVideos] = useState([]);
  const [isMainLoaded, setIsMainLoaded] = useState(false);
  const [isSideLoaded, setIsSideLoaded] = useState(false);
  const [videoComments, setVideoComments] = useState(0);

  const baseURL = "http://localhost:8080";
  const videosEndpoint = "videos";

  useEffect(() => {
    const fetchMainVideo = async () => {
      try {
        if (id) {
          // if id is present in the URL, set mainVideoID to that state
          setMainVideoID(id);
          const response = await axios.get(
            `${baseURL}/${videosEndpoint}/${mainVideoID}`
          );
          const mainVideoData = response.data;
          setMainVideoData(mainVideoData);
          setIsMainLoaded(true);
          //scroll to the top of page when component re-renders
          window.scrollTo(0, 0);
        } else {
          // if no id found, get the id of the first video and set that to state

          // -----------------------------------------------------------------
          // We do a get request to ${baseURL}/${videosEndpoint}
          // which returns a list of all the side videos
          // then we take the id from the first object and store it as state

          const response1 = await axios.get(`${baseURL}/${videosEndpoint}/`);
          setMainVideoID(response1.data[0].id);

          // -----------------------------------------------------------------

          // Then we do another request to ${baseURL}/${videosEndpoint}/${mainVideoID}
          // This time to get the content for just the object related to this id

          if (mainVideoID !== "") {
            const response = await axios.get(
              `${baseURL}/${videosEndpoint}/${mainVideoID}`
            );
            const mainVideoData = response.data;
            setMainVideoData(mainVideoData);
            setIsMainLoaded(true);
          }
        }
      } catch (error) {
        console.error("Error fetching main video:", error);
      }
    };
    fetchMainVideo();
  }, [mainVideoID, id]);

  //This useEffect only runs on first render to get all the side videos data
  useEffect(() => {
    const fetchSideVideos = async () => {
      try {
        const response = await axios.get(`${baseURL}/${videosEndpoint}/`);
        const sideVideosArray = response.data;
        setSideVideos(sideVideosArray);
        setIsSideLoaded(true);
      } catch (error) {
        console.error("Error fetching side videos:", error);
      }
    };
    fetchSideVideos();
  }, []);

  //This useEffect will run every time a new comment is posted
  //If an id is present, it sends a get request to `${baseURL}/${videosEndpoint}/${id}`
  useEffect(() => {
    const fetchMain = async () => {
      if (id) {
        try {
          const resp = await axios.get(`${baseURL}/${videosEndpoint}/${id}`);
          const mainVideoData = resp.data;
          setMainVideoData(mainVideoData);
        } catch (error) {
          console.error("Error fetching main video:", error);
        }
      } else {
        try {
          const resp = await axios.get(`${baseURL}/${videosEndpoint}/`);
          const firstVideoID = resp.data[0].id;
          const resp2 = await axios.get(
            `${baseURL}/${videosEndpoint}/${firstVideoID}`
          );
          const mainVideoData = resp2.data;
          setMainVideoData(mainVideoData);
        } catch (error) {
          console.error("Error fetching first video:", error);
        }
      }
    };
    fetchMain();
  }, [videoComments, id]);

  //When comment is posted, increment the state to cause component re-render
  const handleUpdateComment = () => {
    setVideoComments(videoComments + 1);
  };

  return (
    <>
      {isMainLoaded && isSideLoaded ? (
        <>
          <Banner mainVideoData={mainVideoData} />
          <div className="video-details">
            <div className="video-details--main">
              <Hero mainVideoData={mainVideoData} />
              <Form
                mainVideoData={mainVideoData}
                updateComments={handleUpdateComment}
              />
              <Comments mainVideoData={mainVideoData} />
            </div>
            <div className="video-details--side">
              <SideVideosComponent
                sideVideos={sideVideos.filter((sideVideo) => {
                  return sideVideo.id !== mainVideoID;
                })}
              />
            </div>
          </div>
        </>
      ) : (
        "Loading"
      )}
    </>
  );
};

export default MainPage;
