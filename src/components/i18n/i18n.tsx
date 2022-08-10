import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'



i18n 
.use(LanguageDetector)

.use(initReactI18next)

.init({
    debug:true,
    fallbackLng:'en',
    interpolation : {
        escapeValue:false,
    },
    backend: {
        loadPath: '/locales/{{lng}}/{{ns}}.json',
      },
    resources: {
        en: {
            translation: {
             description: {
                loginPlaceholder:"Email address or phone number",
                passwordPlaceholder:"Password",
                loginButton:"Login",
                forgetPassword:"Forget password?",
                createNewAccount:"Create new account",
                dateOfBirth:'Date of birth',
                name:"Name",
                surname:"Surname",
               question: 'Do you already have an account?',
               registration:'Registration',
             }
            }
        },
        ru:{
            translation: {
                description: {
                    loginPlaceholder:"Электронный адрес или номер телефона",
                    passwordPlaceholder:"Пароль",
                   loginButton:"Вход",
                   forgetPassword:"Забыли пароль?",
                   createNewAccount:"Создать новый аккаунт",
                   dateOfBirth:'Дата рождения',
                   name:"Имя",
                   surname:"Фамилия",
                 question:  'У вас уже есть аккаунт?',
                 registration: 'Регистрация'           
                }
               }
        }
    }
});

export default i18n;