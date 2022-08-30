import Input from "../../../generic(ui)/inputs/Input";

// import {ReactComponent as Home} from '../../../../assets/image/icons/home.svg'
// import {ReactComponent as Group} from '../../../../assets/image/icons/group.svg'
// import {ReactComponent as Computer} from '../../../../assets/image/icons/computer.svg'
// import {ReactComponent as Store} from '../../../../assets/image/icons/store.svg'
// import {ReactComponent as Cell} from '../../../../assets/image/icons/cell.svg'
import home from '../../../../assets/image/icons/home2.svg'
import people from '../../../../assets/image/icons/people2.svg'
import monitor from '../../../../assets/image/icons/monitor.svg'
import store from '../../../../assets/image/icons/store.svg'
import cell from '../../../../assets/image/icons/cell.svg'
import message from '../../../../assets/image/icons/message.svg'
import bell from '../../../../assets/image/icons/bell.svg'
import accounts from '../../../../assets/image/icons/accounts.svg'
import game from '../../../../assets/image/icons/game.svg'
import "./HeaderGeneralpage.css";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { HeaderGeneralProps } from "./HeaderGeneralpage-interface";
import { useTranslation } from "react-i18next";

import LogoSmall from "../../../generic(ui)/logo/logoSmall/Logo-small";
import Icon from "../../../generic(ui)/icon/Icon";
declare module "*.svg";


const iconArrPart1 = [
  {src:home,
    className:'icon-image__bordered',
   alt: 'home',
  path:'/generalpage'},

   {src:people,
    className:'icon-image__bordered',
   alt: 'people',
   path:'/friends'},
   {src:monitor,
    className:'icon-image__bordered',
   alt: 'monitor',
   path:'/facebookWatch'},
   {src:store,
   className:'icon-image__bordered',
   alt: 'store',
   path:'/store'},
   {src:game,
    className:'icon-image__bordered',
   alt: 'games',
   path:'/games'},

]
const iconArrPart2 = [
  {src:cell,
    className:'icon-image__circled',
   alt: 'cell',
   path:'/more'},
  {src:message,
    className:'icon-image__circled',
   alt: 'message',
   path:'/messages'},
   {src:bell,
    className:'icon-image__circled',
   alt: 'bell',
   path:'/notification'},
   {src:accounts,
    className:'icon-image__avatar',
   alt: 'avatar',
   path:'/account'},
   

]


// const iconArr = [
//   {src:'../../../../assets/image/icons/home.svg',
//    alt: 'home'},
//    {src: '../../../../assets/image/icons/group.svg',
//    alt: 'group'},
//    {src:'../../../../assets/image/icons/computer.svg',
//    alt: 'computer'},
//    {src:'../../../../assets/image/icons/store.svg',
//    alt: 'store'},
//    {src:'../../../../assets/image/icons/cell.svg',
//    alt: 'cell'},

// ]



const HeaderGeneralpage: React.FunctionComponent<HeaderGeneralProps> | any = () => {
  const {t} = useTranslation('translation')

  const [password, setPassword] = useState("");
  const [login, setLogin] = useState("");
  const[searchRequest,setSearchRequest] = useState("");
  const buttonEvent = () => {
    const body = { password, login };
    console.log(body);
  }
    // let location = useLocation();
    // if (location.pathname !== "/accountsearch") {
    //   return;
    // }
  
    return (
      <div className="header-general-page">
        <div className='search-on-Facebook__box'>
        <LogoSmall className="header-small__logo"></LogoSmall>
          <Input
            setValueHandler={setSearchRequest}
            className="header__search-on-facebook "
            inputClassName="search-on-facebook__input"
            placeholder={t('description.headerMyPage.search')}
          ></Input>
     </div>
     <div className="icon-button__box">
       {iconArrPart1.map((item,index) => <Icon path={item.path} src={item.src} className={item.className} alt={item.alt} key={index} />)} 
     </div>
     <div className="icon-myPage__box">
     {iconArrPart2.map((item,index) => <Icon path={item.path} src={item.src} className={item.className} alt={item.alt} key={index} />)} 
     </div>
          
        </div>
      
    );
  };

export default HeaderGeneralpage;