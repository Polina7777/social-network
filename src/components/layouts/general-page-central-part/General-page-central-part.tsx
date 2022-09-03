import CreateNewHistoryBox from '../create-new-history-container/Create-new-history'
import CreateRoomContainer from '../create-room-container/Create-room'
import FindFriendsContainer from '../find-friends-container/Find-friends'
import ShareSomethingNewContainer from '../share-something-new-container/Share-something-new'
import { GeneralPageCentralPartHomeProps } from './General-page-central-part-interface'
import './General-page-central-part.css'

const GeneralPageCentralPartHome: React.FC<GeneralPageCentralPartHomeProps> = () => {
  return (
    <div className='general-page-central-part-home'>
      <CreateNewHistoryBox />
      <ShareSomethingNewContainer />
      <CreateRoomContainer />
      <FindFriendsContainer />
    </div>
  )
}

export default GeneralPageCentralPartHome
