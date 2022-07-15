import Input from "../../generic(ui)/inputs/Input"
import Button from "../../generic(ui)/buttons/Button"

import "./Header.css"
import Logo from "../../generic(ui)/logo/Logo";

export interface HeaderProps  {
    className?: string;
    inputClassName?: string;
    type?:string;
   
}

const Header: React.FunctionComponent<HeaderProps> = ({type,inputClassName,className}) => {
    return(
        <div className= {type ==='firstPage'? "first-page-header": 'header'}>
            <Logo className= 'header-logo' ></Logo>
            <div className="authorization-part-header">
            <Input className="header-authorization authorization-login" inputClassName="header-input" placeholder ='Электронный адрес или номер телефона'></Input>
            <Input className="header-authorization authorization-password" inputClassName="header-input" placeholder ='Пароль'></Input>
            <Button color='blue' className="header-button">Вход</Button>
           
       <span className="forget-password-header">Забыли пароль?</span>
            </div>
        </div>
    )
}

export default Header 