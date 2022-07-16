import "./AccountSearch.css"
import Button from "../../generic(ui)/buttons/Button";
import Input from "../../generic(ui)/inputs/Input";

export interface AccountSearchProps {
    type?: string;
    className?: string;
    inputClassName?: string;

}


const AccountSearch: React.FunctionComponent<AccountSearchProps> = () => {

    return(
        <div className="account-search">
        <span className='account-search-title'>Поиск аккаунта</span>
        <span className="account-search-text"> Чтобы найти свой аккаунт, введите ваш электронный адрес или номер мобильного телефона </span>
        <Input className='account-search-box' inputClassName="account-search-input" placeholder="Электронный адрес или номер телефона"></Input>
        <div className="account-search-buttons">
        <Button className="account-search-button light-button"> Отмена </Button>
        <Button color='blue' className="blue-button-search">Поиск</Button>
        </div>
        </div>
    )
}

export default AccountSearch