import ListOfVideoGames from "../../Components/ListOfGames/ListOfVideoGames";
import NavBarGames from "../../Components/NavBarGames/NavBarGames";
import CategoryVideoGames from '../../Components/CategoryGames/CategoryVideoGames';
import { VideoGamesContextProvider} from '../../context/VideoGamesContext';
import { GameContextProvider } from "../../context/GameContext";


const HomePage = () => {
  return (
    <div style={{ padding: '0px' }}>
      <VideoGamesContextProvider>
      <GameContextProvider>
        <NavBarGames />
        <section style={{ display: 'flex', background: '#183648', paddingTop: '10vh' }}>
          <CategoryVideoGames />
          <ListOfVideoGames  />
        </section>
        </GameContextProvider>
      </VideoGamesContextProvider>
    </div>
  )
}

export default HomePage;
