import { SlLogin } from "react-icons/sl";
import { IDetailVideoGame } from "../../constants/IVideoGames";

const DetailVideoGame = (propGame :{ detailVideoGame: IDetailVideoGame }) => {
    return (
        <div style={{ minWidth: '25vw', minHeight: '100%', padding: '20px', display: 'flex', alignItems: 'center', borderRadius: '5px', boxShadow: '2px 0px 5px -4px rgba(0,0,0,0.75)' }}>

            <div style={{ backgroundColor: '#272B30', color: '#fff', padding: '17px', display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '90%', boxShadow: '10px 10px 5px -4px rgba(0,0,0,0.75)' }}>
                <img src={propGame.detailVideoGame?.thumbnail} alt={`${propGame.detailVideoGame?.title}`} />
                <div style={{ width: '90%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h4 style={{ background: 'grey', width: '30%', height: '28px', paddingTop: '5px', textAlign: 'center', borderRadius: '7px' }}>FREE</h4>
                    <a href={propGame.detailVideoGame?.game_url} style={{ background: '#358DE6', width: '65%', height: '28px', paddingTop: '5px', textAlign: 'center', borderRadius: '9px', textDecoration: 'none', color: '#fff' }}>Play Now <SlLogin /></a>
                </div>
            </div>


        </div>
    )
}

export default DetailVideoGame
