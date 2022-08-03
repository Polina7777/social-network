import "./Authorization.css"
import Button from "../../generic(ui)/buttons/Button"
import Input from "../../generic(ui)/inputs/Input"
import { Link,} from "react-router-dom";
import {useState} from "react";



export interface AuthorizationProps {
  type?:any
  to?:string;
  value?:string;
  postHandler?: (value: any) => void;
  handlerOnChange?:(value:any) => void;
  inputEvent?:(value:any) => void;
  ref?:any;
  initialValue?:any
  focus?:any
  focusOnInputClick?:(value:any) => void;
  
  
  
}

const data = {
  TITLES: {
     LOGIN: 'Вход',
     FORGETPASSWORD:'Забыли пароль?',
     CREATENEWACCOUNT:'Создать новый аккаунт'
  }
}

const Authorization:React.FunctionComponent <AuthorizationProps> = ()=> {
   const [value,setValue] = useState('')

   const [password,setPassword] = useState('');
   const [login, setLogin] = useState('')

  const buttonEvent = () => {
   const body = {password,login}
    console.log(body)
  }

   
  

 
   return (
    
    <div className="authorization">
       <Input
        type="password" setValueHandler={setLogin} className='input_authorization authorization_login' placeholder ='Электронный адрес или номер телефона'></Input>
       <Input type="password" setValueHandler={setPassword} className='input_authorization authorization_password' placeholder ='Пароль'></Input>
       <Button color='blue' buttonEventHandler={buttonEvent} className="authorization__button">{data.TITLES.LOGIN}</Button>
       <Link to='accountsearch'
       className='forget-password__authorization'
        >{data.TITLES.FORGETPASSWORD}</Link>
       <Link to='registration' className="button-link">
       <Button color='green' className="authorization__button">{data.TITLES.CREATENEWACCOUNT}</Button>
       </Link>
    </div>
   )
}

export default Authorization



