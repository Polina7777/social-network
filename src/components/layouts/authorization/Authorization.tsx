import "./Authorization.css"
import Button from "../../generic(ui)/buttons/Button"
import Input from "../../generic(ui)/inputs/Input"
import { Link,} from "react-router-dom";
import { useEffect, useRef,useState} from "react";



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


const Authorization:React.FunctionComponent <AuthorizationProps> = ()=> {
   const [value,setValue] = useState('')

  
//   const f = (event: React.ChangeEvent<HTMLInputElement>)=>setValue(event.target.value)
   
    const handlerOnChange = () => { 
       postHandler?.(value)
      console.log(value)}
    
   
    

      const inputRef = useRef<HTMLInputElement|null>(null);
      useEffect(()=>{inputRef.current?.focus()},[]);

      const focusOnInputClick = () => {
        
         inputRef.current?.focus();
  
         console.log('кнопка')
         
      
      }

 
   return (
    
    <div className="authorization">
       <Input
      //   inputEvent={(event: React.ChangeEvent<HTMLInputElement>)=>setValue(event.target.value)}
      handlerOnChange={handlerOnChange}
      inputOnChange={(event: React.ChangeEvent<HTMLInputElement>)=>setValue(event.target.value)}
        ref ={inputRef} type="password" className='input_authorization authorization_login' placeholder ='Электронный адрес или номер телефона'></Input>
       <Input type="password" className='input_authorization authorization_password' placeholder ='Пароль'></Input>
       <Button color='blue' focusOnInputClick={focusOnInputClick}  className="authorization_button">Вход</Button>
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



