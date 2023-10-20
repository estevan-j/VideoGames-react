import { createContext, useState } from "react";
import { VideoGameContexType } from "../constants/IVideoGames";

export const VideoGamesContext = createContext<Partial<VideoGameContexType>>({});

type VideoGameContextProviderProps = {
    children : JSX.Element | JSX.Element[]
}


export const VideoGamesContextProvider = ({children } : VideoGameContextProviderProps ) => {
    const [genreGames, setGenreGames] = useState('');
    return (
        <VideoGamesContext.Provider 
            value={{genreGames, setGenreGames}}>
            {children}
        </VideoGamesContext.Provider>
    );
}



 