import "./Authorization.css"
import Button from "../../generic(ui)/buttons/Button"
import Input from "../../generic(ui)/inputs/Input"
 
export interface AuthorizationProps {
  type?:'header'|'main'|'footer'
}


const Authorization:React.FunctionComponent <AuthorizationProps> = (type) => {
   return (
    <div className="authorization">
       <Input className='input_authorization authorization-login' placeholder ='Электронный адрес или номер телефона'></Input>
       <Input className='input_authorization authorization-password' placeholder ='Пароль'></Input>
       <Button color='blue'>Вход</Button>
       <span className={type==='header'?`forget-password-${type}`: `forget-password`}>Забыли пароль?</span>
       <Button color='green'>Создать новый аккаунт</Button>
    </div>
   )
}

export default Authorization