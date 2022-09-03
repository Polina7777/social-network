import './Authorization.css'
import Button from '../../generic(ui)/buttons/Button'
import Input from '../../generic(ui)/inputs/Input'
import {Link, useNavigate} from 'react-router-dom'
import React, { Suspense, useState } from 'react'
import { AuthorizationProps } from './Authorization-interface'
import { useTranslation } from 'react-i18next'
import i18n from '../../../i18n/i18n'
import Logo from '../../generic(ui)/logo/logo/Logo'

const Authorization: React.FunctionComponent<AuthorizationProps> = () => {
  const { t } = useTranslation('translation')
  const navigate = useNavigate();

  const [password, setPassword] = useState('')
  const [login, setLogin] = useState('')
  const buttonEvent = () => {

    const body = { password, login }
    console.log(body)
    navigate('/generalpage');
  }

  return (
    <Suspense fallback='loading'>
      <div className='full_authorization'>
        <div className='authorization_title__box'>
          <Logo className='authorization_title__logo'></Logo>
          <article className='authorization_title__article'>
            {t('description.authorization.article')}
          </article>
        </div>
        <div className='authorization'>
          <Input
            type='text'
            setValueHandler={setLogin}
            className='input_authorization authorization_login'
            placeholder={t('description.authorization.loginPlaceholder')}
          ></Input>

          <Input
            type='text'
            setValueHandler={setPassword}
            className='input_authorization authorization_password'
            placeholder={t('description.authorization.passwordPlaceholder')}
          ></Input>
          <Button color='blue' buttonEventHandler={buttonEvent} className='authorization__button'>
            {t('description.authorization.loginButton')}
          </Button>
          <Link to='accountsearch' className='forget_password__authorization'>
            {t('description.authorization.forgetAccount')}
          </Link>
          <Link to='registration' className='button_link'>
            <Button color='green' className='authorization__button'>
              {t('description.authorization.createNewAccount')}
            </Button>
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
        </div>
      </div>
    </Suspense>
  )
}

export default Authorization
