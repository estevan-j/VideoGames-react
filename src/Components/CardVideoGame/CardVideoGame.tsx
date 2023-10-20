import { CardVideoGameStyle, InfoGame, ImgVideoGameStyle, InfoVideoGameStyle, GenreVideoGameStyle } from "./style/CardVideoGameStyle";
import {AiFillWindows} from 'react-icons/ai';
import {GoBrowser} from 'react-icons/go';
import { ICardVideoGame } from "../../constants/IVideoGames";
import './style/CardVideoGames.css';

const CardVideoGame = ({title, thumbnail, genre, platform }: ICardVideoGame) => {
  return (
    <div style={CardVideoGameStyle }  className="container-cardGameDetail">
      <img style={ImgVideoGameStyle} src={thumbnail} />
      <div style={InfoVideoGameStyle}>
        <a style={{ margin: '5px 0px', textAlign:'center', fontSize:'1rem' }}> {title} </a>
        <div style={InfoGame}>
          <span style={GenreVideoGameStyle}>{genre}</span>
          {platform === 'PC (Windows)' ? <AiFillWindows/>: <GoBrowser/>}
        </div>
      </div>
    </div>
  )
}

export default CardVideoGame;
