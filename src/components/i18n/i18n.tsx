import i18n from 'i18next'
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
                authorization:{ 
                 authorizationTitle:'Log Into Facebook',
                loginPlaceholder:"Email address or phone number",
                passwordPlaceholder:"Password",
                loginButton:"Log In",
                forgetAccount:"Forgot account? ",
                createNewAccount:"Sign up for Facebook"
            },
               registration:{
                createNewAccount:'Create a new account',
                subTitleRegistration:'It’s quick and easy.',
                dateOfBirth:
                {  dateOfBirth:'Birthday',
                    month:['January,February,March,April,May,June,July,August,September,October,November,December ']
                },
             
                
                name:"First name",
                surname:"Last name",
               question: 'Already have an account?',
               registration:'Sign Up',
               sex:{
                sex:'Gender',
                woman: 'Female',
                man:'Male',
                other:'Custom'
               },
               otherInformationText:' People who use our service may have uploaded your contact information to Facebook.',
               learnMore:' Learn more',
               agreementText: " By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy. You may receive SMS Notifications from us and can opt out any time.",
              
             
            },
            accountSearch:{
             accountSearchText: "Please enter your email or mobile number to search for your account.",
             accountSearchTitle:"Find Your Account",
             search: 'Search',
             cancel:'Cancel',
             
            },
            footer:{
                languages: "English (US)   Русский   Беларуская   العربية   Türkçe   Polski   Italiano   Tiếng Việt   Deutsch   Español   Português (Brasil)",
                links:    "Sign Up   Log In  Messenger  Facebook  Lite Watch   Places   Games   Marketplace  Facebook Pay   Oculus   Portal   Instagram  Bulletin   Local Fundraisers    Services   Voting Information Center   Groups   About   Create Ad    Create Page    Developers   Careers  Privacy   Cookies   Ad choices   Terms   Help    Contact Uploading & Non-UsersSettingsActivity",
            }
            
            
        },
            },
        },
        de: {
            translation: {
             description: {
                authorization:{ 
                authorizationTitle:'Bei Facebook anmelden',
                loginPlaceholder:" E-Mail-Adresse oder Telefonnummer",
                passwordPlaceholder:"Passwort",
                loginButton:"Anmelden",
                forgetAccount:"Passwort vergessen? ",
                createNewAccount:" Für Facebook registrieren"
            },
               registration:{
                createNewAccount:'Erstelle ein neues Konto',
                subTitleRegistration:'Es geht schnell und einfach.',
                dateOfBirth:
                {  dateOfBirth:'Geburtstag',
            month:['der Januar,der Februar,der März,der April,der Mai,der Juni,der Juli,der August,der September,der Oktober,der November, der Dezember ']},
             
                
                name:"Vorname",
                surname:"Nachname",
               question: 'Du hast bereits ein Konto?',
               registration:'Registrieren',
               sex:{
                sex:'Geschlecht',
                woman: 'Weiblich',
                man:'Männlich',
                other:'Divers'
               },
               otherInformationText:'Personen, die unseren Service nutzen, haben möglicherweise deine Kontaktinformationen auf Facebook hochgeladen.',
               learnMore:' Mehr dazu',
               agreementText: "Indem du auf „Registrieren“ klickst, stimmst du unseren Nutzungsbedingungen, unserer Datenrichtlinie und Cookie-Richtlinie zu. Wir schicken dir eventuell Benachrichtigungen per SMS, die du jederzeit abbestellen kannst.",
              
             
            },
            accountSearch:{
             accountSearchText: "Bitte gib deine E-Mail-Adresse oder Mobilnummer ein, um nach deinem Konto zu suchen.",
             accountSearchTitle:"Dein Konto finden",
             search: 'Suchen',
             cancel:'Abbrechen',
             
            },
            footer:{
                languages: "Deutsch   Русский   Беларуская   English (US)    العربية   Türkçe   Polski   Italiano   Tiếng Việt   Español   Português (Brasil)",
                links:"Registrieren   Anmelden   Messenger   Facebook Lite   Watch  Orte   Spiele   Marketplace   Facebook Pay   Oculus   Portal   Instagram   Bulletin   LokalesSpendenaktionen   Services   Wahl-Informationszentrum   Gruppen   Info   Werbeanzeige erstellen   Seite erstellen   Entwickler   Karriere   Privatsphäre   Cookies   Werbepräferenzen   Nutzungsbedingungen   Hilfe   Hochladen von Kontakten und Nicht-Nutzer",
            }
            
            
        },
            },
        },
        ru:{
            translation: {
                description: {
                    authorization:{
                     authorizationTitle:'Вход на Facebook',
                    loginPlaceholder:"Электронный адрес или номер телефона",
                    passwordPlaceholder:"Пароль",
                   loginButton:"Вход",
                   forgetAccount:"Забыли пароль?",
                   createNewAccount:"Создать новый аккаунт"},
                   registration:{
                    createNewAccount:'Создать аккаунт',
                    subTitleRegistration:'Быстро и легко.',
                    dateOfBirth:{
                        dateOfBirth:'Дата рождения',
                        month: 
                            ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'],
                        
                    },
                    name:"Имя",
                    surname:"Фамилия",
                  question:  'У вас уже есть аккаунт?',
                  registration: 'Регистрация',
                  sex:{
                    sex:'Пол',
                    woman: 'Женщина',
                    man:'Мужчина',
                    other:'Другое'
                  },
                  otherInformationText: "Люди,которые пользуются нашим сервисом, могли загрузить вашу контактную информацию на Facebook.",
                  learnMore:'Подробнее',
                  agreementText: " Нажимая кнопку Регистрация, вы принимаете Условия, Политику использования данных и Политику в отношении файлов cookie. Вы можете получать от нас SMS-уведомления, отказаться от которых можно в любой момент.",
                   },
                   accountSearch:{
                    accountSearchText: "Чтобы найти свой аккаунт, введите ваш электронный адрес или номер мобильного телефона",
                    accountSearchTitle:"Поиск аккаунта",
                    search: 'Поиск',
                    cancel:'Отмена',
                   },
                   footer:{
                    languages: "Русский  Беларуская  English (US)   العربية  Türkçe  Polski  Italiano  Tiếng Việt  Deutsch  Español  Português (Brasil)",
                    links:    "Регистрация   Вход   Messenger  Facebook  Lite Watch   Места   Игры   Marketplace   Facebook Pay    Oculus   Portal   Instagram   Bulletin   Местные Благотворительные акции  Услуги  Центр информации о голосовании  Группы  Информация  Создать рекламу  Создать Страницу  Разработчикам  Вакансии  Конфиденциальност  Файлы cookie  Рекламные предпочтения  Условия использования  Справка  Contact Uploading & Non-Users  Настройки  Журнал действий",
                }
                }      
                },
        },
        br:{
            translation: {
                description: {
                    authorization:{
                     authorizationTitle:'Увайсці ў Facebook',
                    loginPlaceholder:"Адрас электроннай пошты цi нумар тэлефона",
                    passwordPlaceholder:"Пароль",
                   loginButton:"Увайсці",
                   forgetAccount:"Забылі ўліковы запіс?",
                   createNewAccount:"Далучыцца да Facebook"},
                   registration:{
                    createNewAccount:'Новы ўліковы запіс',
                    subTitleRegistration:'Гэта хутка і проста.',
                    dateOfBirth:{
                        dateOfBirth:'Дата нараджэння',
                        month: ['Студзень,Люты,Сакавік,Красавік,Май,Чэрвень,Ліпень,Жнівень,Верасень,Кастрычнік,Лістапад,Снежань']
                    },
                    name:"Iмя",
                    surname:"Прозвiшча",
                  question:  'Ужо маеце акаўнт?',
                  registration: 'Зарэгістравацца',
                  sex:{
                    sex:'Гендар',
                    woman: 'Жанчына',
                    man:'Мужчына',
                    other:'Іншае'
                  },
                  otherInformationText: "People who use our service may have uploaded your contact information to Facebook. ",
                  learnMore:'Learn more.',
                  agreementText: " By clicking Зарэгістравацца, you agree to our Terms, Privacy Policy and Cookies Policy. You may receive SMS Notifications from us and can opt out any time.",
                   },
                   accountSearch:{
                    accountSearchText: "Калі ласка, увядзіце свой адрас электроннай пошты або нумар мабільнага тэлефона для пошуку вашай ўліковага запісу.",
                    accountSearchTitle:"Адшукайце ваш уліковы запіс",
                    search: 'Пошук',
                    cancel:'Скасаваць',
                   },
                   footer:{
                    languages: "Беларуская   Русский  Беларуская  English (US)   العربية  Türkçe  Polski  Italiano  Tiếng Việt  Deutsch  Español  Português (Brasil)",
                    links:    "Зарэгістравацца   Увайсці   Messenger   Facebook Lite   Watch   Месцы   Гульні   Marketplace   Facebook Pay   Oculus   Portal   Instagram   Bulletin   Тутэйшае   Дабрачынныя арганізацыі па збору ахвяраванняў   Паслугі   Voting Information Center   Суполкі   Звесткі   Стварыць рэкламу   Стварыць старонку   Распрацоўшчыкi   Кар'ера   Прыватнасць   Кукі   Выбар рэкламы   Умовы карыстання   Дапамога   Contact Uploading & Non-Users",
                }
                }      
                },
        },
        pl:{
                translation: {
                    description: {
                        authorization:{
                         authorizationTitle:'Zaloguj się do Facebooka',
                        loginPlaceholder:" Adres e-mail lub numer telefonu komórkowego",
                        passwordPlaceholder:"Haslo",
                       loginButton:"Zaloguj się",
                       forgetAccount:"Nie pamiętasz nazwy konta?",
                       createNewAccount:"Zarejestruj się na Facebooku"},
                       registration:{
                        createNewAccount:'Utwórz nowe konto',
                        subTitleRegistration:'To szybkie i proste.',
                        dateOfBirth:{
                            dateOfBirth:'Data urodzenia',
                            month:['Styczeń,Luty,Marzec,Kwiecień,Maj,Czerwiec,Lipiec,Sierpień,Wrzesień,Październik,Listopad,Grudzień']
                        },
                        name:"Imię",
                        surname:"Nazwisko",
                      question:  'Masz już konto?',
                      registration: 'Zarejestruj się',
                      sex:{
                        sex:'Płeć',
                        woman: 'Kobieta',
                        man:'Mężczyzna',
                        other:'Ustawienie niestandardowe'
                      },
                      otherInformationText: "Osoby korzystające z naszej usługi mogły przesłać Twoje dane kontaktowe do Facebooka.",
                      learnMore:'Dowiedz się więcej.',
                      agreementText: "Klikając przycisk Zarejestruj się, akceptujesz nasz Regulamin, Zasady ochrony prywatności i Zasady dotyczące plików cookie. Możesz otrzymywać powiadomienia SMS z Facebooka, z których możesz zrezygnować w dowolnej chwili.",
                       },
                       accountSearch:{
                        accountSearchText: "Wprowadź adres e-mail lub numer telefonu komórkowego, aby wyszukać swoje konto.",
                        accountSearchTitle:"Znajdź swoje konto",
                        search: 'Szukaj',
                        cancel:'Anuluj',
                       },
                       footer:{
                        languages: "Polski   Русский   Беларуская    English (US)   العربية   Türkçe   Italiano  Tiếng Việt    Deutsch    Español    Português (Brasil)",
                        links:    "Zarejestruj się    Zaloguj się    Messenger   Facebook Lite   Watch   Miejsca   Gry   Marketplace   Facebook Pay   Oculus   Portal   Instagram   Bulletin   Lokalne Zbiórki pieniędzy   Usługi   Centrum informacji o głosowaniu   Grupy   Informacje   Utwórz reklamę   Utwórz stronę   Twórcy aplikacji   Praca   Prywatność   Pliki cookie   Opcje wyświetlania reklam   Regulamin   Pomoc   Przesyłanie listy kontaktów i osób niebędących użytkownikami",
                    }
                    }      
                    },
        },
        es:{
            translation: {
                description: {
                    authorization:{
                     authorizationTitle:'Iniciar sesión en Facebook',
                    loginPlaceholder:"Correo electrónico o número de teléfono",
                    passwordPlaceholder:"Contraseña",
                   loginButton:"Iniciar sesión",
                   forgetAccount:"¿Olvidaste tu cuenta? ",
                   createNewAccount:"Regístrate en Facebook"},
                   registration:{
                    createNewAccount:'Crea una cuenta',
                    subTitleRegistration:'Es rápido y fácil.',
                    dateOfBirth:{
                        dateOfBirth:'Fecha de nacimiento',
                        month:['Enero,Febrero,Marzo,Abril, Mayo,Junio,Julio,Agosto,Setiembre,Octubre,Noviembre,Diciembre']
                    },
                    name:"Nombre",
                    surname:"Apellido",
                  question:  '¿Ya tienes una cuenta?',
                  registration: 'Regístrate',
                  sex:{
                    sex:'Sexo',
                    woman: 'Mujer',
                    man:'Hombre',
                    other:'Personalizado'
                  },
                  otherInformationText: "Es posible que las personas que usan nuestro servicio hayan subido tu información de contacto a Facebook. ",
                  learnMore:'Obtén más información.',
                  agreementText: "Al hacer clic en Registrarte, aceptas nuestras Condiciones, la Política de privacidad y la Política de cookies. Es posible que te enviemos notificaciones por SMS, que puedes desactivar cuando quieras.",
                   },
                   accountSearch:{
                    accountSearchText: "Ingresa tu correo electrónico o número de celular para buscar tu cuenta.",
                    accountSearchTitle:"Recupera tu cuenta",
                    search: 'Buscar',
                    cancel:'Cancelar',
                   },
                   footer:{
                    languages: "Español   Русский   Беларуская   English (US)   العربية   Türkçe   Polski   Italiano   Tiếng Việt   Deutsch   Português (Brasil)",
                    links:"Registrarte   Iniciar  sesión   Messenger   Facebook Lite   Watch   Lugares   Juegos   Marketplace   Facebook Pay   Oculus   Portal   Instagram   Bulletin   LocalRecaudaciones de fondos   Servicios   Centro de información de votación   Grupos   Información   Crear anuncio   Crear página   Desarrolladores   Empleo   Privacidad   Cookies   Opciones de anuncios   Condiciones   Ayuda   Subir contactos y no usuarios",
                }
                }      
                },
        },
        et:{
        translation: {
            description: {
                authorization:{
                 authorizationTitle:'Accedi a Facebook',
                loginPlaceholder:"E-mail o numero di telefono",
                passwordPlaceholder:"Password",
               loginButton:"Accedi",
               forgetAccount:"Non ricordi più come accedere all'account?",
               createNewAccount:"Iscriviti a Facebook"},
               registration:{
                createNewAccount:'Crea un nuovo account',
                subTitleRegistration:'È veloce e semplice',
                dateOfBirth:{
                    dateOfBirth:'Data di nascita',
                    month:['Gennaio,Febbraio,Marzo,Aprile,Maggio,Giugno,Luglio,Settembre,Ottobre,Novembre,Dicembre']
                },
                name:"Nome",
                surname:"Cognome",
              question:  'Hai già un account?',
              registration: 'Iscriviti',
              sex:{
                sex:'Genere',
                woman: 'Donna',
                man:'Uomo',
                other:'Opzione personalizzata'
              },
              otherInformationText: "Le persone che usano il nostro servizio potrebbero aver caricato le tue informazioni di contatto su Facebook. ",
              learnMore:'Scopri di più.',
              agreementText: "Cliccando su Iscriviti, accetti le nostre Condizioni, l'Informativa sulla privacy e la Normativa sui cookie. Potresti ricevere notifiche tramite SMS da noi, ma puoi disattivarle in qualsiasi momento.",
               },
               accountSearch:{
                accountSearchText: "Inserisci l'e-mail o il numero di cellulare per cercare il tuo accont.",
                accountSearchTitle:"Trova il tuo account",
                search: 'Cerca',
                cancel:'Annulla',
               },
               footer:{
                languages: "Italiano   Русский   Беларуская   English (US)  العربية   Türkçe   Polski   Tiếng Việt   Deutsch   Español    Português (Brasil) ",
                links:"Iscriviti   Accedi   Messenger   Facebook Lite   Watch   Luoghi   Giochi   Marketplace   Facebook Pay   Oculus   Portal   Instagram   Bulletin   Nei dintorni   Raccolte fondi   Servizi   Centro informazioni sul voto   Gruppi   Informazioni   Crea un'inserzione   Crea una Pagina   Sviluppatori   Opportunità di lavoro   Privacy   CookieScegli tu!   Condizioni   Centro assistenza   Caricamento dei contatti e non-utenti",
            }
            }      
            },
        },
        pt:{
            translation: {
                description: {
                    authorization:{
                     authorizationTitle:'Entrar no Facebook',
                    loginPlaceholder:"Email ou telefone",
                    passwordPlaceholder:"Senha",
                   loginButton:"Entrar",
                   forgetAccount:"Esqueceu a conta?",
                   createNewAccount:"Cadastre-se no Facebook"},
                   registration:{
                    createNewAccount:'Criar uma nova conta',
                    subTitleRegistration:'É rápido e fácil.',
                    dateOfBirth:{
                        dateOfBirth:'Data de nascimento',
                        month:['Janeiro,Fevereiro,Março,Abril,Maio,Junho,Julho,Agosto,Setembro,Outubro,Novembro,Dezembro']
                    },
                    name:"Nome",
                    surname:"Sobrenome",
                  question:  'Já tem uma conta?',
                  registration: 'Cadastre-se',
                  sex:{
                    sex:'Gênero',
                    woman: 'Feminino',
                    man:'Masculino',
                    other:'Personalizado'
                  },
                  otherInformationText: "As pessoas que usam nosso serviço podem ter carregado suas informações de contato no Facebook.",
                  learnMore:'Saiba mais.',
                  agreementText: "Ao clicar em Cadastre-se, você concorda com nossos Termos, Política de Privacidade e Política de Cookies. Você poderá receber notificações por SMS e cancelar isso quando quiser.",
                   },
                   accountSearch:{
                    accountSearchText: "Insira seu email ou número de celular para procurar a sua conta.",
                    accountSearchTitle:"Encontre sua conta",
                    search: 'Pesquisar',
                    cancel:'Cancelar',
                   },
                   footer:{
                    languages: "Português (Brasil)   Русский   Беларуская    English (US)    العربية   Türkçe   Polski   Italiano   Tiếng Việt    Deutsch   Español ",
                    links:"Cadastre-se   Entrar   Messenger   Facebook Lite   Watch   Locais   Jogos   Marketplace   Facebook Pay   Oculus   Portal   Instagram   Boletim   Local   Campanhas de arrecadação de fundos   Serviços    Central de Informações de Votação   Grupos   Sobre   Criar anúncio   Criar Página   Desenvolvedores   Carreiras   Privacidade   Cookies   Escolhas para anúncios   Termos   Ajuda   Carregamento de contatos e não usuários",
                }
                }      
                },
            },
        tu:{
                translation: {
                    description: {
                        authorization:{
                         authorizationTitle:"Facebook'a Giriş Yap",
                        loginPlaceholder:"E-posta veya telefon Numarası",
                        passwordPlaceholder:"şifre",
                       loginButton:"Giriş Yap",
                       forgetAccount:"Hesabını mı unuttun? ",
                       createNewAccount:" Facebook'a Kaydol"},
                       registration:{
                        createNewAccount:'Yeni Bir Hesap Oluştur',
                        subTitleRegistration:'Hızlı ve kolaydır.',
                        dateOfBirth:{
                            dateOfBirth:'Doğum Tarihi',
                            month:['Ocak,Şubat,Mart,Nisan,Mayıs,Haziran,Temmuz,Ağustos,Eylül,Ekim,Kasım,Aralık']
                        },
                        name:"Аdın",
                        surname:"Soyadın",
                      question:  'Hesabın zaten var mı?',
                      registration: 'Kaydol',
                      sex:{
                        sex:'Cinsiyet',
                        woman: 'Kadın',
                        man:'Erkek',
                        other:'Özel'
                      },
                      otherInformationText: "Hizmetimizi kullanan kişiler senin iletişim bilgilerini Facebook'a yüklemiş olabilir.",
                      learnMore:'Daha fazla bilgi al.',
                      agreementText: "Kaydol düğmesine tıklayarak, Koşullarımızı, Gizlilik İlkemizi ve Çerezler İlkemizi kabul etmiş olursun. Bizden SMS Bildirimleri alabilir ve bu bildirimleri istediğin zaman durdurabilirsin.",
                       },
                       accountSearch:{
                        accountSearchText: "Hesabını aramak için lütfen e-posta adresini veya cep telefonu numaranı gir.",
                        accountSearchTitle:"Hesabını Bul",
                        search: 'Ara',
                        cancel:'İptal Et',
                       },
                       footer:{
                        languages: "Türkçe   Русский   Беларуская   English (US)    العربية    Polski   Italiano   Tiếng Việt    Deutsch    Español   Português (Brasil) ",
                        links:"Kaydol   Giriş Yap   Messenger   Facebook Lite   Watch   Yerler   Oyunlar   Marketplace   Facebook Pay   Oculus   Portal   Instagram   Bulletin   Yerel   Bağış Kampanyaları   Hizmetler   Oy Kullanma Bilgi Merkezi   Gruplar   Hakkımızda   Reklam Oluştur   Sayfa Oluştur   Geliştiriciler   Kariyer Olanakları   Gizlilik   Çerezler   Ad Choices   Koşullar   Yardım   Kişi Yükleme ve Hesabı Olmayan Kişiler",
                    }
                    }      
                    },
          },
        tv:{
            translation: {
                description: {
                    authorization:{
                     authorizationTitle:"Đăng nhập Facebook",
                    loginPlaceholder:"Email hoặc số điện thoại",
                    passwordPlaceholder:"Mật",
                   loginButton:"Đăng nhập",
                   forgetAccount:"Quên tài khoản?",
                   createNewAccount:"Đăng ký Facebook"},
                   registration:{
                    createNewAccount:'Tạo tài khoản mới',
                    subTitleRegistration:'Nhanh chóng và dễ dàng.',
                    dateOfBirth:{
                        dateOfBirth:'Sinh nhật',
                        month:['Tháng một,Tháng Hai,Diễu hành,Tháng Tư,Có thể,Tháng Sáu,Tháng Bảy,Uy nghi,Tháng Chín,Tháng Mười,Tháng Mười Một,Tháng mười hai']
                    },
                    name:"Họ",
                    surname:"Tên",
                  question:  'Bạn đã có tài khoản ư?',
                  registration: 'Đăng ký',
                  sex:{
                    sex:'Giới tính',
                    woman: 'Nữ',
                    man:'Nam',
                    other:'Tùy chỉnh'
                  },
                  otherInformationText: "Người dùng dịch vụ của chúng tôi có thể đã tải thông tin liên hệ của bạn lên Facebook.",
                  learnMore:'Tìm hiểu thêm.',
                  agreementText: "Bằng cách nhấp vào Đăng ký, bạn đồng ý với Điều khoản, Chính sách quyền riêng tư và Chính sách cookie của chúng tôi. Bạn có thể nhận được thông báo của chúng tôi qua SMS và hủy nhận bất kỳ lúc nào.",
                   },
                   accountSearch:{
                    accountSearchText: " Vui lòng nhập email hoặc số di động để tìm kiếm tài khoản của bạn.",
                    accountSearchTitle:"Tìm tài khoản của bạn",
                    search: 'Tìm kiếm',
                    cancel:'Hủy',
                   },
                   footer:{
                    languages: "Tiếng Việt   Русский    Беларуская   English (US)    العربية   Türkçe    Polski   Italiano    Deutsch   Español    Português (Brasil)",
                    links:"Đăng ký    Đăng nhập    Messenger   Facebook Lite   Watch   Địa điểm   Trò chơi   Marketplace   Facebook Pay   Oculus   Portal   Instagram   Bulletin   Địa phương   Chiến dịch gây quỹ   Dịch vụ   Trung tâm thông tin bỏ phiếu   Nhóm   Giới thiệu   Tạo quảng cáo   Tạo Trang   Nhà phát triển   Tuyển dụng   Quyền riêng tư   Cookie   Lựa chọn quảng cáo   Điều khoản   Trợ giúp   Tải thông tin liên hệ lên & đối tượng không phải người dùng",
                }
                }      
                },
      },
      
        
    }
    

});

export default i18n;