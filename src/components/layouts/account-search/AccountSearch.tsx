import "./AccountSearch.css"
import Button from "../../generic(ui)/buttons/Button";
import Input from "../../generic(ui)/inputs/Input";
import { Link } from "react-router-dom";
import { useState } from "react";
import { AccountSearchProps } from "./AccountSearch-interface";


  const data = {
    ACCOUNTSEARCHTEXT: "Чтобы найти свой аккаунт, введите ваш электронный адрес или номер мобильного телефона",
    ACCOUNTSEARCHTITLE:"Поиск аккаунта",
    SEARCH:'Поиск',
    CANCEL:'Поиск'
  }

const AccountSearch: React.FunctionComponent<AccountSearchProps> = () => {
  const [value,setValue] = useState('')
  const [login, setLogin] = useState('')
   const buttonEvent = () => {
   const body = {login}
    console.log(body)
  }

    return(
        <div className="account-search">
        <h3 className='account-search__title'>{data.ACCOUNTSEARCHTITLE}</h3>
        <h3 className="account-search__text"> {data.ACCOUNTSEARCHTEXT} </h3>
        <Input  type='text' setValueHandler={setLogin} className='account-search__box' inputClassName="account-search_input" placeholder="Электронный адрес или номер телефона"></Input>
        <div className="account-search__buttons">
            <Link to='/'  className="button-link">
        <Button color='light' className="account-search__button"> {data.CANCEL} </Button>
        </Link>
        <Button color='blue' buttonEventHandler={buttonEvent} className="account-search__button" >{data.SEARCH}</Button>
        </div>
        </div>
    )
}

export default AccountSearch