//import { Watch } from "typescript"
import Button from "../../generic(ui)/buttons/Button"
import "./Footer.css"


export interface FooterProps {
    type?: string 
    // links?: [Регистрация, Вход, Messenger, Facebook Life, Watch, Места, Игры, Marketplace, Facebook Pay, Oculus, Portal, Instagram, Bulletin, Местные Благотворительные акции, Услуги, Центр информации о голосовании, Группы, Информация, Создать рекламу, Создать страницу, Разработчикам, Вакансии, Конфиденциальность, Файлы cookie, Рекламные предпочтения, Условия использования, Справка, Contact Uploading & Non-Users]
    buttonClassName?:string
}

const Footer: React.FunctionComponent<FooterProps> = () => {
    //const links = [];
    return(
        <div className="footer">
            <div className="footer-languages">
            <span className="languages-list">
            Русский
Беларуская
English (US)
العربية
Türkçe
Polski
Italiano
Tiếng Việt
Deutsch
Español
Português (Brasil)
               
                </span>
            <Button className="light-button">+</Button>
            </div>
            <div className="navigation-links">
             <div className="links-list">
             Регистрация   Вход   Messenger  Facebook  Lite Watch   Места   Игры   Marketplace   Facebook Pay    Oculus   Portal   Instagram   Bulletin   Местные Благотворительные акции  Услуги  Центр информации о голосовании  Группы  Информация  Создать рекламу  Создать Страницу  Разработчикам  Вакансии  Конфиденциальност  Файлы cookie  Рекламные предпочтения  Условия использования  Справка  Contact Uploading & Non-Users  Настройки  Журнал действий
             </div>

            </div>


        </div>
    )


}
 
export default Footer