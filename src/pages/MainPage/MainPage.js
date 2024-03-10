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

  const [mainVideoID, setMainVideoID] = useState(
    "84e96018-4022-434e-80bf-000ce4cd12b8"
  );
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
          const response1 = await axios.get(`${baseURL}/${videosEndpoint}/`);
          setMainVideoID(response1.data[0].id);
          const response = await axios.get(
            `${baseURL}/${videosEndpoint}/${mainVideoID}`
          );
          const mainVideoData = response.data;
          setMainVideoData(mainVideoData);
          setIsMainLoaded(true);
        }
      } catch (error) {
        console.error("Error fetching main video:", error);
      }
    };
    fetchMainVideo();
  }, [mainVideoID, id]);

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

  useEffect(() => {
    const fetchMain = async () => {
      try {
        const resp = await axios.get(`${baseURL}/${videosEndpoint}/${id}`);
        const mainVideoData = resp.data;
        console.log(mainVideoData);
        setMainVideoData(mainVideoData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMain();
  }, [videoComments, id]);

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
