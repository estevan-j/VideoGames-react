import { AiFillWindows } from 'react-icons/ai'
import { IDetailVideoGame } from '../../constants/IVideoGames'
import { GoBrowser } from 'react-icons/go'

const VideoGameInfo = (propInfo: {detailVideoGame: IDetailVideoGame}) => {
  return (
    <div style={{ padding: '19px 35px', color: 'white', maxWidth: '60%', minHeight: '90%', display: 'flex', flexDirection: 'column', alignItems: 'space-between' }}>
    <div>
      <h2 style={{ marginBottom: '10px', borderBottom: '2px solid #fff' }}>About: {propInfo.detailVideoGame?.title}</h2>
      <p> {propInfo.detailVideoGame?.description} </p>
    </div>
    <h3>Additional Information</h3>
    <div style={{ display: 'flex', flexWrap: 'wrap', padding: '0 10px', borderTop: '2px solid #fff' }}>
      <div className="additional-information">
        <span>
          Publisher
        </span>
        <h4>{propInfo.detailVideoGame?.publisher}</h4>
      </div>
      <div className="additional-information">
        <span>
          Developer
        </span>
        <h4>{propInfo.detailVideoGame?.developer}</h4>
      </div>
      <div className="additional-information">
        <span>
          Status
        </span>
        <h4>{propInfo.detailVideoGame?.status} </h4>
      </div>
      <div className="additional-information">
        <span>
          Platform
        </span>
        <h4> {propInfo.detailVideoGame?.platform} {propInfo.detailVideoGame?.platform === 'Windows' ? <AiFillWindows /> : <GoBrowser />}</h4>
      </div>
      <div className="additional-information">
        <span>
          Release Date
        </span>
        <h4> {propInfo.detailVideoGame?.release_date} </h4>
      </div>
      <div className="additional-information">
        <span>
          Category
        </span>
        <h4> {propInfo.detailVideoGame?.genre} </h4>
      </div>
    </div>
  </div>
  )
}

export default VideoGameInfo
