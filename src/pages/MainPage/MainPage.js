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
  const apiKey = "2d8b3e97-9324-4fa1-9840-920c9b5b7921";
  const baseURL = "https://project-2-api.herokuapp.com";

  useEffect(() => {
    const fetchMainVideo = async () => {
      try {
        if (id) {
          setMainVideoID(id);
          console.log(mainVideoID);
          // setIsMainLoaded(false)
          const response = await axios.get(
            `${baseURL}/videos/${mainVideoID}?api_key=${apiKey}`
          );
          const mainVideoData = response.data;
          setMainVideoData(mainVideoData);
          setIsMainLoaded(true);
        } else {
          setMainVideoID("84e96018-4022-434e-80bf-000ce4cd12b8");
          const response = await axios.get(
            `${baseURL}/videos/${mainVideoID}?api_key=${apiKey}`
          );
          const mainVideoData = response.data;
          setMainVideoData(mainVideoData);
          setIsMainLoaded(true);
        }
      } catch (error) {
        console.error("Error fetching main video:", error);
      }
    };

    // const fetchSideVideos = async () => {
    //   try {
    //     // setIsSideLoaded(false)
    //     const response = await axios.get(
    //       `${baseURL}/videos/?api_key=${apiKey}`
    //     );
    //     const sideVideosArray = response.data;
    //     setSideVideos(sideVideosArray);
    //     setIsSideLoaded(true);
    //   } catch (error) {
    //     console.error("Error fetching side videos:", error);
    //   }
    // };

    fetchMainVideo();
    // fetchSideVideos();
  }, [mainVideoID, id]);

  const fetchSideVideos = async () => {
    try {
      // setIsSideLoaded(false);
      const response = await axios.get(`${baseURL}/videos/?api_key=${apiKey}`);
      const sideVideosArray = response.data;
      setSideVideos(sideVideosArray);
      setIsSideLoaded(true);
    } catch (error) {
      console.error("Error fetching side videos:", error);
    }
  };
  fetchSideVideos();

  return (
    <>
      {isMainLoaded && isSideLoaded ? (
        <>
          <Banner mainVideoData={mainVideoData} />
          <div className="video-details">
            <div className="video-details--main">
              <Hero mainVideoData={mainVideoData} />
              <Form />
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
