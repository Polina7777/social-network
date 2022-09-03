import Icon from '../../generic(ui)/icon/Icon'
import { ShareSomethingNewContainerProps } from './Share-something-new-interface'
import './Share-something-new.css'

import accounts from '../../../assets/image/icons/accounts.svg'
import Input from '../../generic(ui)/inputs/Input'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'

import camera from '../../../../src/assets/image/icons/camera.svg'
import picture from '../../../../src/assets/image/icons/picture.svg'
import smile from '../../../../src/assets/image/icons/smile.svg'

const ShareSomethingNewContainer: React.FC<ShareSomethingNewContainerProps> = () => {
  const { t } = useTranslation('translation')
  const [news, setNews] = useState('')

  const iconsActionButtonsArr = [
    {
      src: camera,
      className: 'icon-colored',
      alt: 'camera',
      path: '/generalpage',
      text: t('description.createNewHistory.life'),
    },
    {
      src: picture,
      className: 'icon-colored',
      alt: 'pictures',
      path: '/generalpage',
      text: t('description.createNewHistory.fotoVideo'),
    },
    {
      src: smile,
      className: 'icon-colored',
      alt: 'smile',
      path: '/generalpage',
      text: t('description.createNewHistory.feelingAction'),
    },
  ]
  return (
    <div className='share-something-new__container'>
      <div className='new-information__box'>
        <Icon path='/generalpage' src={accounts} className='account-foto' />
        <Input
          className='new-information'
          placeholder={t('description.createNewHistory.question')}
          setValueHandler={setNews}
        />
      </div>
      <div className='icons-action__buttons'>
        {iconsActionButtonsArr.map((item, index) => (
          <Icon
            path={item.path}
            src={item.src}
            className={item.className}
            alt={item.alt}
            text={item.text}
            key={index.toString()}
          />
        ))}
      </div>
    </div>
  )
}

export default ShareSomethingNewContainer
