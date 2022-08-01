import "./AccountSearch.css"
import Button from "../../generic(ui)/buttons/Button";
import Input from "../../generic(ui)/inputs/Input";
import { Link } from "react-router-dom";

export interface AccountSearchProps {
    type?: string;
    className?: string;
    inputClassName?: string;

}


const AccountSearch: React.FunctionComponent<AccountSearchProps> = () => {
    const accountSeacrhText = "Чтобы найти свой аккаунт, введите ваш электронный адрес или номер мобильного телефона";
    const accountSeacrhTitle = "Поиск аккаунта";
    return(
        <div className="account-search">
        <h3 className='account-search_title'>{accountSeacrhTitle}</h3>
        <h3 className="account-search_text"> {accountSeacrhText} </h3>
        <Input  type='password' className='account-search_box' inputClassName="account-search_input" placeholder="Электронный адрес или номер телефона"></Input>
        <div className="account-search_buttons">
            <Link to='/'  className="button_link">
        <Button color='light' className="account-search_button"> Отмена </Button>
        </Link>
        <Button color='blue' className="account-search_button" >Поиск</Button>
        </div>
        </div>
    )
}

export default AccountSearch