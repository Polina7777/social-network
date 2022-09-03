import { CreateNewHistoryBoxProps } from './Create-new-history-interface'
import './Create-new-history.css'
import plus from '../../../assets/image/icons/plus.svg'
import Icon from '../../generic(ui)/icon/Icon'
import { t } from 'i18next'
import { useTranslation } from 'react-i18next'
const CreateNewHistoryBox: React.FC<CreateNewHistoryBoxProps> = (className) => {
  const { t } = useTranslation('translation')
  return (
    <div className='create-new-history__box'>
      <Icon path='/generalpage' src={plus} className='plus' />
      <div className='create-new-history__title'>
        <p className='create-new-history__title'> {t('description.createNewHistory.title')}</p>
        <p className='create-new-history__article'> {t('description.createNewHistory.article')}</p>
      </div>
    </div>
  )
}

export default CreateNewHistoryBox
