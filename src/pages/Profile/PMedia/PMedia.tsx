import st from './PMedia.module.css'
import FriendsBanner from './FriendsBanner/FriendsBanner'
import PhotosBanner from './PhotosBanner/PhotosBanner'

type Props = {
  isOwner: boolean
}

const PMedia: React.FC<Props> = props => {
  return (
    <div>
      <div className={st.media + ' shadow'}>
        <PhotosBanner />
      </div>
      {props.isOwner && (
        <div className={st.media + ' shadow'}>
          <FriendsBanner />
        </div>
      )}
    </div>
  )
}

export default PMedia
