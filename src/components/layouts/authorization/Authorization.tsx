import "./Authorization.css";
import Button from "../../generic(ui)/buttons/Button";
import Input from "../../generic(ui)/inputs/Input";
import { Link } from "react-router-dom";
import React, { Suspense, useState } from "react";
import { AuthorizationProps } from "./Authorization-interface";
import {useTranslation,Trans, Translation} from 'react-i18next';
import i18n from "../../i18n/i18n";


const data = {
  TITLES: {
    LOGIN: "Вход",
    FORGETPASSWORD: "Забыли пароль?",
    CREATENEWACCOUNT: "Создать новый аккаунт",
  },
};

const lngs = {
  en:{nativeName:'English'},
  ru:{nativeName: 'Русский'}
}

const Authorization: React.FunctionComponent<AuthorizationProps> = () => {
 // const {t,i18n} = useTranslation();

  //const { t, i18n } = useTranslation('translation');
  
const {t} = useTranslation('translation')


  const [password, setPassword] = useState("");
  const [login, setLogin] = useState("");
  const buttonEvent = () => {
    const body = { password, login };
    console.log(body);
  };

  return (
    <Suspense fallback="loading">
    <div className="authorization">
      <Input
        type="text"
        setValueHandler={setLogin}
        className="input_authorization authorization_login"
        placeholder = {t('description.loginPlaceholder')}>
 
 
</Input>
       
      <Input
        type="text"
        setValueHandler={setPassword}
        className="input_authorization authorization_password"
        placeholder={t('description.passwordPlaceholder')}
      ></Input>
      <Button
        color="blue"
        buttonEventHandler={buttonEvent}
        className="authorization__button"
      >
        {t('description.loginButton')}
      </Button>
      <Link to="accountsearch" className="forget-password__authorization">
        {t('description.forgetPassword')}
      </Link>
      <Link to="registration" className="button-link">
        <Button color="green" className="authorization__button">
          {t('description.createNewAccount')}
        </Button>
       
      </Link>
      <Button color="green" className="change-language_button" buttonEventHandler={()=> i18n.changeLanguage('en')}>
        EN
        </Button>
        <Button color="green" className="change-language_button" buttonEventHandler={()=> i18n.changeLanguage('ru')}>
          RU
        </Button>
    </div>
    </Suspense>
  );
};

export default Authorization;
