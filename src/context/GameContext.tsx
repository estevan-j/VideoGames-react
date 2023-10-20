import { createContext, useState } from "react";
import { GameContexType} from "../constants/IVideoGames";

export const GameContext = createContext<Partial<GameContexType>>({});

type VideoGameContextProviderProps = {
    children : JSX.Element | JSX.Element[]
}


export const GameContextProvider = ({children } : VideoGameContextProviderProps ) => {
    const [titleGame, setTitleGame] = useState('');
    return (
        <GameContext.Provider 
            value={{titleGame, setTitleGame}}>
            {children}
        </GameContext.Provider>
    );
}



 