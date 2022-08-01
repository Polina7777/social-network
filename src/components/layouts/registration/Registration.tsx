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
        SUB_TITLE: 'Быстро и легко'
      },
      OTHER_INFORMATION_TEXT: "Люди,которые пользуются нашим сервисом, могли загрузить вашу контактную информацию на Facebook.",
      LINK_MORE: 'Подробнее',
      INPUTS_PLACEHOLDER: {
        NAME: 'Имя'
      }
    }
  }
}

const Registration: React.FunctionComponent<RegistrationProps> = () => {
  const agreementText =
    " Нажимая кнопку Регистрация, вы принимаете Условия, Политику использования данных и Политику в отношении файлов cookie. Вы можете получать от нас SMS-уведомления, отказаться от которых можно в любой момент.";
  return (
    <div className="registration_container">
      <Logo className="registration_logo"></Logo>
      <section className="registration">
        <header className="registration_article">
          <h1 className="registration_title">{data.PAGES.REGISTRATION.HEADER.TITLE}</h1>
          <h2 className="registration_text">{data.PAGES.REGISTRATION.HEADER.SUB_TITLE}</h2>
        </header>
        <div className="registration__full-name">
          <Input
            className="registration__input"
            placeholder="Имя"
          ></Input>
          <Input
            className="registration__input"
            placeholder="Фамилия"
          ></Input>
        </div>
        <div className="registration__password-and-email">
          <Input
            className="registration__input"
            placeholder="Электронный адрес или номер телефона"
          ></Input>
          <Input
            className="registration__input"
            placeholder="Пароль"
          ></Input>
        </div>


        <ContainerDateOfBirth></ContainerDateOfBirth>


        <h5 className="sex_title">Пол</h5>
        <div className="sex">

          <div className="sex_box woman_box">
            <label htmlFor="woman">Женщина</label>
            <Input
              type="radio"
              id="woman"
              value="woman"
              className="woman"
            ></Input>
          </div>
          <div className="sex_box man_box">
            <label htmlFor="man">Мужчина</label>
            <Input type="radio" id="man" value="man" className="man"></Input>
          </div>
          <div className="sex_box other_box">
            <label htmlFor="other">Другое</label>
            <Input
              type="radio"
              id="other"
              value="other"
              className="other"
            ></Input>
          </div>
        </div>
        <div className="other_information">
          <h3 className="other_information-text">
            {data.PAGES.REGISTRATION.OTHER_INFORMATION_TEXT + ' '}
            <Link to={"#"}>{data.PAGES.REGISTRATION.LINK_MORE}</Link>
          </h3>

          {/* <h3>Подробнее</h3> */}
        </div>
        <div className="agreement_text">
          <h3 className="agreement_artircle">{agreementText}</h3>
          <Button color="green" className="registration_button">
            Регистрация
          </Button>
          <Link className="authorization-page_link" to="/">
            У вас уже есть аккаунт?
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Registration;
