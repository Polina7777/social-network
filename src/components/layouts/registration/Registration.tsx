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

const Registration: React.FunctionComponent<RegistrationProps> = () => {
  const otherInformationText =
    " Люди,которые пользуются нашим сервисом, могли загрузить вашу контактную информацию на Facebook.";
  const agreementText =
    " Нажимая кнопку Регистрация, вы принимаете Условия, Политику использования данных и Политику в отношении файлов cookie. Вы можете получать от нас SMS-уведомления, отказаться от которых можно в любой момент.";
  return (
    <div className="registration_container">
      <div className="registration_logo">
        <Logo className="registration_logo"></Logo>
      </div>

      <div className="registration">
        <div className="registration_article">
          <h3 className="registration_title">Создать аккаунт</h3>
          <h5 className="registration_text">Быстро и легко</h5>
        </div>
        <div className="fullName">
          <Input
            className="name"
            inputClassName="name_input"
            placeholder="Имя"
          ></Input>
          <Input
            className="surname"
            inputClassName="surname_input"
            placeholder="Фамилия"
          ></Input>
        </div>
        <div className="login-password">
          <Input
            className="input_authorization authorization_login"
            inputClassName="registration_input-login"
            placeholder="Электронный адрес или номер телефона"
          ></Input>
          <Input
            className="input_authorization authorization_password"
            inputClassName="registration_input-password"
            placeholder="Пароль"
          ></Input>
        </div>
        <h5 className="day-of-birth_title">Дата рождения</h5>
        <ContainerDateOfBirth></ContainerDateOfBirth>
        {/* <div className="date-of-birth">
  

          <Input type="text" className="day-of-birth"></Input>
          <Input type="fieldset" className="month-of-birth"></Input>
          <Input type="fieldset" className="year-of-birth"></Input>
        </div> */}
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
            {otherInformationText} Подробнее
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
      </div>
    </div>
  );
};

export default Registration;
