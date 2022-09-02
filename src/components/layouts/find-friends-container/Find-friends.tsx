
import { t } from 'i18next'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import Button from '../../generic(ui)/buttons/Button'
import { FindFriendsContainerProps } from './Find-friends-interface'
import './Find-friends.css'

const FindFriendsContainer: React.FC<FindFriendsContainerProps> = () => {
    const {t} = useTranslation('translation')
    return (
        <div className='find-friends__container'>
            <p className='find-friends__article'>{t('description.findFriends.article')}</p>
            <p className='find-friends__subArticle'>{t('description.findFriends.subArticle')}</p>
            <Link to=''> 
             <Button className='find-friend__button' color='blue'>{t('description.findFriends.buttonName')}</Button>
            </Link>
          
        </div>
    )

}

export default FindFriendsContainer