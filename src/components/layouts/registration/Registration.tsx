import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import Button from '../../generic(ui)/buttons/Button'
import ContainerDateOfBirth from '../../generic(ui)/checkbox/container-date-of-birth/ContainerDateOfBirth'
import Input from '../../generic(ui)/inputs/Input'
import Logo from '../../generic(ui)/logo/logo/Logo'
import i18n from '../../../i18n/i18n'
import { DateSelect, RegistrationProps } from './Registration-interface-types'
import './Registration.css'
export const registrationContext = React.createContext({})

const Registration: React.FunctionComponent<RegistrationProps> = () => {
  const { t } = useTranslation('translation')
  const [password, setPassword] = useState('')
  const [login, setLogin] = useState('')
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [sex, setSex] = useState('')
  const [dateSelect, setDateSelect] = useState<DateSelect>({
    day: '',
    month: '',
    year: '',
  })

  const buttonEvent = () => {
    const body = {
      name,
      surname,
      dateSelect,
      sex,
      login,
      password,
    }
    console.log(body)
  }

  return (
    <registrationContext.Provider value={name}>
      <div className='registration__container'>
        <Logo className='registration__logo'></Logo>
        <section className='registration'>
          <header className='registration__article'>
            <h1 className='registration__title'>
              {t('description.registration.createNewAccount')}
            </h1>
            <h2 className='registration__text'>
              {t('description.registration.subTitleRegistration')}
            </h2>
          </header>
          <div className='registration__full_name'>
            <Input
              setValueHandler={setName}
              className='registration__input'
              placeholder={t('description.registration.name')}
            ></Input>
            <Input
              setValueHandler={setSurname}
              className='registration__input'
              placeholder={t('description.registration.surname')}
            ></Input>
          </div>
          <div className='registration__password_and_email'>
            <Input
              setValueHandler={setLogin}
              className='registration__input'
              placeholder={t('description.authorization.loginPlaceholder')}
            ></Input>
            <Input
              setValueHandler={setPassword}
              className='registration__input'
              placeholder={t('description.authorization.passwordPlaceholder')}
            ></Input>
          </div>

          <ContainerDateOfBirth dateSelect={setDateSelect}></ContainerDateOfBirth>

          <div className='sex'>
            <h5 className='sex__title'>{t('description.registration.sex.sex')}</h5>
            <div className='sex__boxes'>
              <div className='sex__box woman_box'>
                <label htmlFor='woman'>{t('description.registration.sex.woman')}</label>
                <Input
                  setValueHandler={setSex}
                  type='radio'
                  name='sex'
                  id='woman'
                  value='woman'
                  className='woman'
                ></Input>
              </div>
              <div className='sex__box man_box'>
                <label htmlFor='man'>{t('description.registration.sex.man')}</label>
                <Input
                  setValueHandler={setSex}
                  type='radio'
                  name='sex'
                  id='man'
                  value='man'
                  className='man'
                ></Input>
              </div>
              <div className='sex__box other_box'>
                <label htmlFor='other'>{t('description.registration.sex.other')}</label>
                <Input
                  setValueHandler={setSex}
                  type='radio'
                  name='sex'
                  id='other'
                  value='other'
                  className='other'
                ></Input>
              </div>
            </div>
          </div>
          <div className='other_information'>
            <h3 className='other_information__text'>
              {t('description.registration.otherInformationText')}
              <Link to={'#'}>{t('description.registration.learnMore')}</Link>
            </h3>
          </div>
          <div className='agreement__text'>
            <h3 className='agreement__artircle'>{t('description.registration.agreementText')}</h3>
            <Button color='green' buttonEventHandler={buttonEvent} className='registration__button'>
              {t('description.registration.registration')}
            </Button>
            <Link className='registration_page__link' to='/'>
              {t('description.registration.question')}
            </Link>
            <Button
              color='green'
              className='change_language__button'
              buttonEventHandler={() => i18n.changeLanguage('en')}
            >
              EN
            </Button>
            <Button
              color='green'
              className='change_language__button'
              buttonEventHandler={() => i18n.changeLanguage('ru')}
            >
              RU
            </Button>
            <Button
              color='green'
              className='change_language__button'
              buttonEventHandler={() => i18n.changeLanguage('de')}
            >
              DE
            </Button>
            <Button
              color='green'
              className='change_language__button'
              buttonEventHandler={() => i18n.changeLanguage('es')}
            >
              ES
            </Button>
          </div>
        </section>
      </div>
    </registrationContext.Provider>
  )
}

export default Registration
