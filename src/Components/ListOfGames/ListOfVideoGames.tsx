import CardVideoGame from '../CardVideoGame/CardVideoGame';
import { ICardVideoGame } from '../../constants/IVideoGames';
import { useVideoGames } from '../../hooks/useVideoGames';
import { useContext, useEffect, useState } from 'react';
import { VideoGamesContext } from '../../context/VideoGamesContext';
import { Link } from 'react-router-dom';
import './sytle/ListOfGames.css';
import * as React from 'react';
import ReactPaginate from 'react-paginate';
import { categories } from '../../constants/CategoriesVideoGames';
import { GameContext } from '../../context/GameContext';
import { isEmpty } from 'lodash';

const itemsPerPage = 12;

const ListOfVideoGames = () => {
  const { videoGames } = useVideoGames();
  const [currentPage, setCurrentPage] = React.useState(0);
  const { genreGames } = useContext(VideoGamesContext);
  const { titleGame} = useContext(GameContext);
  const [filterList, setFilterList] = useState<Array<ICardVideoGame>>([]);

  useEffect(() => {
    setFilterList(videoGames)
    if (categories.includes(genreGames)) {
      const listVideoGames = videoGames.filter(videoGames => videoGames.genre == genreGames);
      setFilterList(listVideoGames)
    } 
    if (!isEmpty(titleGame)){
      const videoGame = videoGames.filter( game => game.title.toLowerCase().indexOf(titleGame) !== -1)
      setFilterList(videoGame);
    }


  }, [genreGames,titleGame, videoGames])

  // useEffect(()=> {

  // },[])


  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  return (
    <div className='container-cardGame'>
      {filterList.length !== 0 ? filterList.slice(startIndex, endIndex).map((videoGame: ICardVideoGame) =>
        <Link key={videoGame.id} to={`/${videoGame.title}?id=${videoGame.id}`}>
          <CardVideoGame
            id={videoGame.id}
            title={videoGame.title}
            thumbnail={videoGame.thumbnail}
            genre={videoGame.genre}
            platform={videoGame.platform}
          />
        </Link>): <h1 style={{margin: '25vh auto'}}>Sorry, no games found!</h1>}
      {filterList.length > 12 ? <ReactPaginate
        pageCount={Math.ceil(filterList.length / itemsPerPage)}
        pageRangeDisplayed={5}
        marginPagesDisplayed={1}
        onPageChange={(selected) => setCurrentPage(selected.selected)}
        className='pagination'
      /> : <></>}
    </div>

  )
}


export default ListOfVideoGames

