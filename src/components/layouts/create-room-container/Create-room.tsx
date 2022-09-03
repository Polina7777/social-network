import Icon from '../../generic(ui)/icon/Icon'
import { CreateRoomContainerProps } from './Create-room-interface'
import './Create-room.css'
import camera from '../../../assets/image/icons/camera.svg'
import { t } from 'i18next'
import { useTranslation } from 'react-i18next'

const CreateRoomContainer: React.FC<CreateRoomContainerProps> = () => {
  const { t } = useTranslation('translation')

  return (
    <div className='create-room__container'>
      <Icon
        path='/generalpage'
        src={camera}
        alt='camera'
        text={t('description.createNewHistory.title')}
        className='camera-icon'
      />
    </div>
  )
}

export default CreateRoomContainer
