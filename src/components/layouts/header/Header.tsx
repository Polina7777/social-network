import Input from "../../generic(ui)/inputs/Input";
import Button from "../../generic(ui)/buttons/Button";

import "./Header.css";
import Logo from "../../generic(ui)/logo/Logo";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";

export interface HeaderProps {
  className?: string;
  inputClassName?: string;
  type?: string;
  value?: string;
}
const data = {
  TITLES: {
    LOGIN: "Вход",
    FORGETPASSWORD: "Забыли пароль?",
  },
};


const Header: React.FunctionComponent<HeaderProps> | any = () => {
  //const [value, setValue] = useState("");
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
            placeholder="Электронный адрес или номер телефона"
          ></Input>
          <Input
            setValueHandler={setPassword}
            className="header_authorization authorization_password"
            inputClassName="header-input"
            placeholder="Пароль"
          ></Input>
          <Button
            buttonEventHandler={buttonEvent}
            color="blue"
            className="header__button"
          >
            {data.TITLES.LOGIN}
          </Button>

          <Link to="accountsearch" className="forget-password_header">
            {data.TITLES.FORGETPASSWORD}
          </Link>
        </div>
      </div>
    );
  };

export default Header;
