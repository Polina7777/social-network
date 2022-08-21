import Input from "../../../generic(ui)/inputs/Input";
import Button from "../../../generic(ui)/buttons/Button";

import "./Header.css";
import Logo from "../../../generic(ui)/logo/logo/Logo";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
import { HeaderMyPageProps } from "./Header-my-page-interface";
import { useTranslation } from "react-i18next";
import LogoSmall from "../../../generic(ui)/logo/logoSmall/Logo-small";
import IconHome from "../../../generic(ui)/icons/icon-home/Icon-home";
import IconGroup from "../../../generic(ui)/icons/icon-group/Icon-group";
import IconComputer from "../../../generic(ui)/icons/icon-computer/Icon-computer";
import IconStore from "../../../generic(ui)/icons/icon-store/Icon-store";
import IconCell from "../../../generic(ui)/icons/icon-cell/Icon-cell";
import IconBell from "../../../generic(ui)/icons/icon-bell/Icon-bell";
import IconMessage from "../../../generic(ui)/icons/icon-message/Icon-message";


const Header: React.FunctionComponent<HeaderMyPageProps> | any = () => {
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
      <IconHome></IconHome>
      <IconGroup></IconGroup>
      <IconComputer></IconComputer>
      <IconStore></IconStore>
      <IconCell></IconCell>
     </div>
     <div className="icon-myPage__box">
      <IconCell></IconCell>
      <IconMessage></IconMessage>
      <IconBell></IconBell>
     </div>
          <Button
            buttonEventHandler={buttonEvent}
            color="blue"
            className="header__button"
          >
           {t('description.authorization.loginButton')}
          </Button>

          <Link to="accountsearch" className="forget-password_header">
          {t('description.authorization.forgetAccount')}
          </Link>
        </div>
      
    );
  };

export default Header;