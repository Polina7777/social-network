import Input from "../../generic(ui)/inputs/Input"
import Button from "../../generic(ui)/buttons/Button"

import "./Header.css"
import Logo from "../../generic(ui)/logo/Logo";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export interface HeaderProps  {
    className?: string;
    inputClassName?: string;
    type?:string;
   
}

const Header: React.FunctionComponent<HeaderProps> | any = () => {
    let location = useLocation();
    if(location.pathname !== '/accountsearch') {
        return 
    }
    return(
        <div className="header">
            <Logo className= 'header_logo' ></Logo>
            <div className="header_authorization-part">
            <Input className="header_authorization authorization_login" inputClassName="header-input" placeholder ='Электронный адрес или номер телефона'></Input>
            <Input className="header_authorization authorization_password" inputClassName="header-input" placeholder ='Пароль'></Input>
            <Button color='blue' className="header_button">Вход</Button>
           
       <Link to = 'accountsearch' className="forget-password_header">Забыли пароль?</Link>
            </div>
            
        </div>
    )
}

export default Header 