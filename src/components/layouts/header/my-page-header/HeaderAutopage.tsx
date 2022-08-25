import Input from "../../../generic(ui)/inputs/Input";
import Button from "../../../generic(ui)/buttons/Button";

// import {ReactComponent as Home} from '../../../../assets/image/icons/home.svg'
// import {ReactComponent as Group} from '../../../../assets/image/icons/group.svg'
// import {ReactComponent as Computer} from '../../../../assets/image/icons/computer.svg'
// import {ReactComponent as Store} from '../../../../assets/image/icons/store.svg'
// import {ReactComponent as Cell} from '../../../../assets/image/icons/cell.svg'
import home from '../../../../assets/image/icons/home.svg'
import people from '../../../../assets/image/icons/people.svg'
import computer from '../../../../assets/image/icons/computer.svg'
import store from '../../../../assets/image/icons/store.svg'
import cell from '../../../../assets/image/icons/cell.svg'
import message from '../../../../assets/image/icons/message.svg'
import bell from '../../../../assets/image/icons/bell.svg'
import accounts from '../../../../assets/image/icons/accounts.svg'
import "./HeaderAutopage.css";
import Logo from "../../../generic(ui)/logo/logo/Logo";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
import { HeaderMyPageProps } from "./HeaderAutopage-interface";
import { useTranslation } from "react-i18next";
import LogoSmall from "../../../generic(ui)/logo/logoSmall/Logo-small";
import Icon from "../../../generic(ui)/icon/Icon";
declare module "*.svg";


const iconArrPart1 = [
  {src:home,
    className:'icon-image__bordered',
   alt: 'home',},

   {src:people,
    className:'icon-image__bordered',
   alt: 'people'},
   {src:computer,
    className:'icon-image__bordered',
   alt: 'computer'},
   {src:store,
   className:'icon-image__bordered',
   alt: 'store'},
   {src:cell,
    className:'icon-image__bordered',
   alt: 'cell'},

]
const iconArrPart2 = [
  {src:cell,
    className:'icon-image__circled',
   alt: 'cell'},
  {src:message,
    className:'icon-image__circled',
   alt: 'message'},
   {src:bell,
    className:'icon-image__circled',
   alt: 'bell'},
   {src:accounts,
    className:'icon-image__avatar',
   alt: 'avatar'},
   

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



const HeaderAutopage: React.FunctionComponent<HeaderMyPageProps> | any = () => {
  const {t} = useTranslation('translation')

  const [password, setPassword] = useState("");
  const [login, setLogin] = useState("");
  const[searchRequest,setSearchRequest] = useState("");
  const buttonEvent = () => {
    const body = { password, login };
    console.log(body);
  }
    let location = useLocation();
    if (location.pathname !== "/accountsearch") {
      return;
    }
  
    return (
      <div className="header">
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
       {iconArrPart1.map((item,index) => <Icon src={item.src} className={item.className} alt={item.alt} key={index} />)} 
     </div>
     <div className="icon-myPage__box">
     {iconArrPart2.map((item,index) => <Icon src={item.src} className={item.className} alt={item.alt} key={index} />)} 
     </div>
          
        </div>
      
    );
  };

export default HeaderAutopage;