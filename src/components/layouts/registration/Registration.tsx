import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Button from "../../generic(ui)/buttons/Button";
import ContainerDateOfBirth from "../../generic(ui)/checkbox/container-date-of-birth/ContainerDateOfBirth";
import Input from "../../generic(ui)/inputs/Input";
import Logo from "../../generic(ui)/logo/Logo";
import i18n from "../../i18n/i18n";
import { DateSelect, RegistrationProps } from "./Registration-interface-types";
import "./Registration.css";
export const registrationContext = React.createContext({})
const data = {
  PAGES: {
    REGISTRATION: {
      HEADER: {
        TITLE: 'Создать аккаунт',
        SUB_TITLE: 'Быстро и легко',
        SEX_TITLE: 'Пол',
        REGISTRATION:'Регистрация',
        QUESTION: 'У вас уже есть аккаунт?'
      },
      OTHER_INFORMATION_TEXT: "Люди,которые пользуются нашим сервисом, могли загрузить вашу контактную информацию на Facebook.",
      AGREEMENT_TEXT: " Нажимая кнопку Регистрация, вы принимаете Условия, Политику использования данных и Политику в отношении файлов cookie. Вы можете получать от нас SMS-уведомления, отказаться от которых можно в любой момент.",
      LINK_MORE: 'Подробнее',
      INPUTS_PLACEHOLDER: {
        NAME: 'Имя',
        SURNAME: 'Фамилия',
        SEX: {
          WOMAN: 'Женщина',
          MAN: 'Мужчина',
          OTHER: 'Другое'

        }
      }
    }
  }
}



const Registration: React.FunctionComponent<RegistrationProps> = () => {
  const {t} = useTranslation('translation')
  const [password,setPassword] = useState('');
  const [login, setLogin] = useState('');
  const [name,setName] = useState('');
  const [surname,setSurname] = useState('');
  const [sex,setSex] = useState('');
  const [dateSelect,setDateSelect] = useState<DateSelect>({day:'',month:'',year:''});

 const buttonEvent = () => {
  const body = { 
    name,surname,dateSelect,sex,login,password
    
  }
  console.log(body)
 }


  return (
   <registrationContext.Provider value={name}>
    <div className="registration__container">
      <Logo className="registration__logo"></Logo>
      <section className="registration">
        <header className="registration__article">
          <h1 className="registration__title">{data.PAGES.REGISTRATION.HEADER.TITLE}</h1>
          <h2 className="registration__text">{data.PAGES.REGISTRATION.HEADER.SUB_TITLE}</h2>
        </header>
        <div className="registration__full-name">
          <Input setValueHandler={setName}
            className="registration__input"
            placeholder={t("description.name")}
          ></Input>
          <Input setValueHandler={setSurname}
            className="registration__input"
            placeholder={t("description.surname")}
          ></Input>
        </div>
        <div className="registration__password-and-email">
          <Input setValueHandler={setLogin}
            className="registration__input"
            placeholder={t('description.loginPlaceholder')}>
        </Input>
          <Input  setValueHandler={setPassword}
            className="registration__input"
            placeholder={t('description.passwordPlaceholder')}
          ></Input>
        </div>

        <ContainerDateOfBirth dateSelect ={setDateSelect }></ContainerDateOfBirth>
        
        <div className="sex">
        <h5 className="sex__title">{data.PAGES.REGISTRATION.HEADER.SEX_TITLE}</h5>
        <div className="sex__boxes">
          <div className="sex__box woman-box">
            <label htmlFor="woman">{data.PAGES.REGISTRATION.INPUTS_PLACEHOLDER.SEX.WOMAN}</label>
            <Input
            setValueHandler={setSex}
              type="radio"
              name= 'sex'
              id="woman"
              value="woman"
              className="woman"
            ></Input>
          </div>
          <div className="sex__box man-box">
            <label htmlFor="man">{data.PAGES.REGISTRATION.INPUTS_PLACEHOLDER.SEX.MAN}</label>
            <Input setValueHandler={setSex}
            type="radio"   name='sex' id="man" value="man" className="man"></Input>
          </div>
          <div className="sex__box other-box">
            <label htmlFor="other">{data.PAGES.REGISTRATION.INPUTS_PLACEHOLDER.SEX.OTHER}</label>
            <Input setValueHandler={setSex}
              type="radio"
              name= 'sex'
              id="other"
              value="other"
              className="other"
            ></Input>
          </div>
          </div>
        </div>
        <div className="other_information">
          <h3 className="other_information-text">
            {data.PAGES.REGISTRATION.OTHER_INFORMATION_TEXT + ' '}
            <Link to={"#"}>{data.PAGES.REGISTRATION.LINK_MORE}</Link>
          </h3>
        </div>
        <div className="agreement__text">
          <h3 className="agreement__artircle">{data.PAGES.REGISTRATION.AGREEMENT_TEXT}</h3>
          <Button color="green" buttonEventHandler={buttonEvent} className="registration__button">
            {t('description.registration')}
          </Button>
          <Link className="registration-page__link" to="/">
           {t('description.question')}
          </Link>
          <Button color="green" className="change-language_button" buttonEventHandler={()=> i18n.changeLanguage('en')}>
        EN
        </Button>
        <Button color="green" className="change-language_button" buttonEventHandler={()=> i18n.changeLanguage('ru')}>
          RU
        </Button>
        </div>
      </section>
    </div>
    </registrationContext.Provider>
  );
};


export default Registration