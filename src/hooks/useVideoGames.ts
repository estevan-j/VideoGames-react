import axios from "axios";
import { useEffect, useState } from "react";

const options = {
  method: "GET",
  url: import.meta.env.VITE_API_PATH,
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
    "X-RapidAPI-Host": import.meta.env.VITE_API_HOST,
  },
};



export const useVideoGames = () => {
  const [videoGames, setVideoGames] = useState([]);
  async function loadGames() {
    try {
      const response = await axios.request(options);
      setVideoGames(response.data)
      // console.error('loading data from api: ',response.data);
    } catch (error) {
      console.error(error);
    }    
  }


  useEffect(()=>{
    loadGames();
  },[])
  return{
    videoGames
  }

};
