//import { Watch } from "typescript"
import Button from "../../generic(ui)/buttons/Button"
import "./Footer.css"


export interface FooterProps {
    type?: string 
    buttonClassName?:string
}

const data = {
    LANGUAGES: 'Русский  Беларуская  English (US)   العربية  Türkçe  Polski  Italiano  Tiếng Việt  Deutsch  Español  Português (Brasil)',
    LINKS: "Регистрация   Вход   Messenger  Facebook  Lite Watch   Места   Игры   Marketplace   Facebook Pay    Oculus   Portal   Instagram   Bulletin   Местные Благотворительные акции  Услуги  Центр информации о голосовании  Группы  Информация  Создать рекламу  Создать Страницу  Разработчикам  Вакансии  Конфиденциальност  Файлы cookie  Рекламные предпочтения  Условия использования  Справка  Contact Uploading & Non-Users  Настройки  Журнал действий",
    PLUS:'+'
}

const Footer: React.FunctionComponent<FooterProps> = () => {

    return(
        <div className="footer">
            <div className="footer_languages">
            <h4 className="languages_list">
             {data.LANGUAGES}
                </h4>
            <Button color='light' className='footer__button'>{data.PLUS}</Button>
            </div>
            <div className="navigation_links">
             <div className="links_list">
             {data.LINKS}
             </div>

            </div>


        </div>
    )


}
 
export default Footer