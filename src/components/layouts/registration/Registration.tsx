import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../generic(ui)/buttons/Button";
import ContainerDateOfBirth from "../../generic(ui)/checkbox/ContainerDateOfBirth";

import Input from "../../generic(ui)/inputs/Input";
import Logo from "../../generic(ui)/logo/Logo";
import "./Registration.css";


export interface RegistrationProps {
  value?: string;
  type?: string;
  className?: string;
  color?: string;
  buttonClassName?: string;
  inputClassName?: string;
  placeholder?: string;
  handlerOnClick?: () => void;
  handlerOnChange?: () => void;
}

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
  const [password,setPassword] = useState('');
  const [login, setLogin] = useState('');
  const [name,setName] = useState('');
  const [surname,setSurname] = useState('');
  const [man,setMan] = useState('');
  const [woman,setWoman] = useState('');
  const [other,setOther] = useState('');
  const [day,setDay] = useState('');
  const [month,setMonth] = useState('');
  const [year,setYear] = useState('');

 const buttonEvent = () => {
  const body = { 
    FULLNAME:{
      name:name,
      surname:surname
    },
     SEX: {woman,man,other},

    password,login}
   console.log(body)
 }
  return (
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
            placeholder="Имя"
          ></Input>
          <Input setValueHandler={setSurname}
            className="registration__input"
            placeholder="Фамилия"
          ></Input>
        </div>
        <div className="registration__password-and-email">
          <Input setValueHandler={setLogin}
            className="registration__input"
            placeholder="Электронный адрес или номер телефона"
          ></Input>
          <Input  setValueHandler={setPassword}
            className="registration__input"
            placeholder="Пароль"
          ></Input>
        </div>

        <ContainerDateOfBirth></ContainerDateOfBirth>
        
        <div className="sex">
        <h5 className="sex__title">{data.PAGES.REGISTRATION.HEADER.SEX_TITLE}</h5>
        <div className="sex__boxes">
          <div className="sex__box woman-box">
            <label htmlFor="woman">{data.PAGES.REGISTRATION.INPUTS_PLACEHOLDER.SEX.WOMAN}</label>
            <Input
            setValueHandler={setWoman}
              type="radio"
              id="woman"
              value="woman"
              className="woman"
            ></Input>
          </div>
          <div className="sex__box man-box">
            <label htmlFor="man">{data.PAGES.REGISTRATION.INPUTS_PLACEHOLDER.SEX.MAN}</label>
            <Input setValueHandler={setMan}
            type="radio" id="man" value="man" className="man"></Input>
          </div>
          <div className="sex__box other-box">
            <label htmlFor="other">{data.PAGES.REGISTRATION.INPUTS_PLACEHOLDER.SEX.OTHER}</label>
            <Input setValueHandler={setOther}
              type="radio"
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

          {/* <h3>Подробнее</h3> */}
        </div>
        <div className="agreement__text">
          <h3 className="agreement__artircle">{data.PAGES.REGISTRATION.AGREEMENT_TEXT}</h3>
          <Button color="green" buttonEventHandler={buttonEvent} className="registration__button">
            {data.PAGES.REGISTRATION.HEADER.REGISTRATION}
          </Button>
          <Link className="registration-page__link" to="/">
           {data.PAGES.REGISTRATION.HEADER.QUESTION}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Registration;
