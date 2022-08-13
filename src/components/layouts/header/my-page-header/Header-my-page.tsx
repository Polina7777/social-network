import Input from "../../../generic(ui)/inputs/Input";
import Button from "../../../generic(ui)/buttons/Button";

import "./Header.css";
import Logo from "../../../generic(ui)/logo/Logo";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
import { HeaderMyPageProps } from "./Header-my-page-interface";
import { useTranslation } from "react-i18next";


const Header: React.FunctionComponent<HeaderMyPageProps> | any = () => {
  const {t} = useTranslation('translation')

  const [password, setPassword] = useState("");
  const [login, setLogin] = useState("");
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
        <Logo className="header__logo"></Logo>
        <div className="header_authorization-part">
          <Input
            setValueHandler={setLogin}
            className="header_authorization authorization_login"
            inputClassName="header-input"
            placeholder={t('description.authorization.loginPlaceholder')}
          ></Input>
          <Input
            setValueHandler={setPassword}
            className="header_authorization authorization_password"
            inputClassName="header-input"
            placeholder={t('description.authorization.passwordPlaceholder')}
          ></Input>
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
      </div>
    );
  };

export default Header;