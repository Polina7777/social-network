import { useTranslation } from "react-i18next"
import { FriendsNavigationContainerProps } from "./Friends-navigation-interface"
import './Friends-navigation.css'


import gear from '../../../assets/image/icons/gear.svg'
import friendsgeneral from './../../../assets/image/icons/friendsgeneral.svg'
import friendrequest from '../../../assets/image/icons/friendrequest.svg'
import friendsrecommendation from '../../../assets/image/icons/friendsrecommendation.svg'
import allfriends from '../../../assets/image/icons/allfriends.svg'
import birthday from '../../../assets/image/icons/birthday.svg'
import Icon from "../../generic(ui)/icon/Icon"


const FriendsNavigationContainer:React.FC<FriendsNavigationContainerProps> = () => {
    const {t} = useTranslation('translation')

    const friendsIconsArr = [
        {src:friendsgeneral,
            alt:'friends-general',
            className:'icon-image__circled',
            text:t('description.friends.general'),
            path:'/friends/friendsgeneral'
            },
        {src:friendrequest,
        alt:'friend-request',
        className:'icon-image__circled',
        text:t('description.friends.requests'),
        path:'/friends/friendrequest'
        },
        {src:friendsrecommendation,
            alt:'friends-recommendation',
            className:'icon-image__circled',
            text:t('description.friends.recommendations'),
            path:'/friends/friendsrecommendation'
            },
        {src:allfriends,
                alt:'all-friends',
                className:'icon-image__circled',
                text:t('description.friends.all'),
                path:'/friends/allfriends'
                },
        {src:birthday,
                    alt:'birthday',
                    className:'icon-image__circled',
                    text:t('description.friends.birthdays'),
                    path:'/friends/birthdays'
                    },
        {src:allfriends,
                    alt:'lists',
                    className:'icon-image__circled',
                    text:t('description.friends.lists'),
                    path:'/friends/ownlists'
                    },
    ]     
    return (
   <div className="friends-navigation__container">
      <div className="friends__title">
        <p className="friends">{t('description.friends.title')}</p>
        <Icon src={gear} className='icon-gear' alt='gear' path={""}/>
      </div>
      <div className="friends-navigation__list">
      {friendsIconsArr.map((item,index) => <Icon path={item.path} src={item.src} className={item.className} alt={item.alt} key={index} />)} 
      </div>

   </div>
    )
}


export default FriendsNavigationContainer