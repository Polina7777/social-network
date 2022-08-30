import Input from "../../../../generic(ui)/inputs/Input";
import Button from "../../../../generic(ui)/buttons/Button";

import "./Header-before-authorization.css";
import Logo from "../../../../generic(ui)/logo/logo/Logo";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
import { HeaderBeforeAuthorizationProps } from "./Header-before-authorization-interrface";
import { useTranslation } from "react-i18next";


const HeaderBeforeAuthorization: React.FunctionComponent<HeaderBeforeAuthorizationProps> | any = () => {
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
      <div className="header-before-authorization">
        <Logo className="header-before-authorization__logo"></Logo>
        <div className="header-before-authorization_authorization-part">
          <Input
            setValueHandler={setLogin}
            className="header-before-authorization_authorization authorization_login"
            inputClassName="header-before-authorization-input"
            placeholder={t('description.authorization.loginPlaceholder')}
          ></Input>
          <Input
            setValueHandler={setPassword}
            className="header-before-authorization_authorization authorization_password"
            inputClassName="header-before-authorization-input"
            placeholder={t('description.authorization.passwordPlaceholder')}
          ></Input>
          <Button
            buttonEventHandler={buttonEvent}
            color="blue"
            className="header-before-authorization__button"
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

export default HeaderBeforeAuthorization;
