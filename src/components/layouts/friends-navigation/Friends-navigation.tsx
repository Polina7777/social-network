import { useTranslation } from "react-i18next"
import { FriendsNavigationContainerProps } from "./Friends-navigation-interface"
import './Friends-navigation.css'


import gear from '../../../assets/image/icons/gear.svg'
import friendrequest from '../../../assets/image/icons/friendrequest.svg'
import friendsrecommendation from '../../../assets/image/icons/friendsrecommendation.svg'
import allfriends from '../../../assets/image/icons/allfriends.svg'
import birthday from '../../../assets/image/icons/birthday.svg'


const FriendsNavigationContainer:React.FC<FriendsNavigationContainerProps> = () => {
    const {t} = useTranslation('translation')

    const friendIconArr = [
        {src:friendrequest,
        alt:'friend-request',
        className:'icon__circled',
        text:{t('description.friends.requests')}
        },
        {src:friendsrecommendation,
            alt:'friends-recommendation',
            className:'icon__circled',
            text:{t('description.friends.recommendations')}
            },
        {src:allfriends,
                alt:'all-friends',
                className:'icon__circled',
                text:{t('description.friends.all')}
                },
        {src:birthday,
                    alt:'birthday',
                    className:'icon__circled',
                    text:{t('description.friends.birthdays')}
                    },
                    {src:allfriends,
                        alt:'lists',
                        className:'icon__circled',
                        text:{t('description.friends.list')}
                        },
    ]     
    return (
   <div className="friends-navigation__container">
      <div className="friends__title">
        <p className="friends">{t('description.friends.title')}</p>
        <Icon src={gear} className='icon-gear' alt='gear'/>
      </div>

   </div>
    )
}


export default FriendsNavigationContainer