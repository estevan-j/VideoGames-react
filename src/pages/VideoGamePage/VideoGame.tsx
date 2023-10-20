import axios from "axios";
import NavBarGames from "../../Components/NavBarGames/NavBarGames"
import './styles/VideoGamePage.css'
import { Suspense, lazy, useEffect, useRef, useState } from "react";
import { IDetailVideoGame } from "../../constants/IVideoGames";
import { useLocation } from "react-router-dom";
import { CircularProgress } from "@mui/material";

const DetailVideoGame = lazy(() => import("../../Components/DetailGame/DetailVideoGame"))
const VideoGameInfo = lazy(() => import("../../Components/VideoGameInfo/VideoGameInfo"))

const VideoGame = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const id = new URLSearchParams(useLocation().search).get('id');
  const [detailGame, setDetailGame] = useState<IDetailVideoGame>();
  const options = {
    method: 'GET',
    url: import.meta.env.VITE_API_PATH_DETAIL,
    params: { id: id },
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
      'X-RapidAPI-Host': import.meta.env.VITE_API_HOST
    }
  };

  async function loadDetailVideoGame() {
    try {
      setLoading(true);
      const response = await axios.request(options);
      setDetailGame(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    console.log(loading);
    loadDetailVideoGame();
  }, [])

  return (
    <div style={{ padding: '0px', margin: '0', boxSizing: 'border-box' }}>
      <NavBarGames />
      <section style={{ display: 'flex', paddingTop: '7.1vh', minHeight: '95vh', backgroundColor: '#183648' }}>
        <Suspense fallback={<CircularProgress style={{margin: '50vh'}} />}>        
          {loading? <CircularProgress style={{margin: '50vh'}} /> :           
          <DetailVideoGame detailVideoGame={detailGame} />}
          {loading? <CircularProgress style={{margin: '50vh'}} /> :           
          <VideoGameInfo detailVideoGame={detailGame} />}
        </Suspense>
      </section>

    </div>
  )
}

export default VideoGame
