import "./Authorization.css"
import Button from "../../generic(ui)/buttons/Button"
import Input from "../../generic(ui)/inputs/Input"

import { Link,} from "react-router-dom";



export interface AuthorizationProps {
  type?:'header'|'main'|'footer'
  to?:string
}


const Authorization:React.FunctionComponent <AuthorizationProps> = (type) => {
 
   return (
    
    <div className="authorization">
       <Input type="password" className='input_authorization authorization_login' placeholder ='Электронный адрес или номер телефона'></Input>
       <Input type="password" className='input_authorization authorization_password' placeholder ='Пароль'></Input>
       <Button color='blue' className="authorization_button">Вход</Button>
       <Link to='accountsearch'
       className='forget-password_authorization'
        >Забыли пароль?</Link>
       <Link to='registration' className="button_link">
       <Button color='green' className="authorization_button">Создать новый аккаунт</Button>
       </Link>
    </div>
   )
}

export default Authorization