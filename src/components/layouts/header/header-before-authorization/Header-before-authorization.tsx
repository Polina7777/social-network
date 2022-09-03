import Input from '../../../generic(ui)/inputs/Input'
import Button from '../../../generic(ui)/buttons/Button'

import './Header-before-authorization.css'
import Logo from '../../../generic(ui)/logo/logo/Logo'
import { useLocation, Link } from 'react-router-dom'
import { useState } from 'react'
import { HeaderBeforeAuthorizationProps } from './Header-before-authorization-interrface'
import { useTranslation } from 'react-i18next'

const HeaderBeforeAuthorization:
  | React.FunctionComponent<HeaderBeforeAuthorizationProps>
  | any = () => {
  const { t } = useTranslation('translation')

  const [password, setPassword] = useState('')
  const [login, setLogin] = useState('')
  const buttonEvent = () => {
    const body = { password, login }
    console.log(body)
  }
  const location = useLocation()
  if (location.pathname !== '/accountsearch') {
    return
  }

  return (
    <div className='header_before_authorization'>
      <Logo className='header_before_authorization__logo'></Logo>
      <div className='header_before_authorization__authorization_part'>
        <Input
          setValueHandler={setLogin}
          className='header_before_authorization__authorization authorization_login'
          inputClassName='header_before_authorization__input'
          placeholder={t('description.authorization.loginPlaceholder')}
        ></Input>
        <Input
          setValueHandler={setPassword}
          className='header_before_authorization__authorization authorization_password'
          inputClassName='header_before_authorization__input'
          placeholder={t('description.authorization.passwordPlaceholder')}
        ></Input>
        <Button
          buttonEventHandler={buttonEvent}
          color='blue'
          className='header_before_authorization__button'
        >
          {t('description.authorization.loginButton')}
        </Button>

        <Link to='accountsearch' className='forget_password__header'>
          {t('description.authorization.forgetAccount')}
        </Link>
      </div>
    </div>
  )
}

export default HeaderBeforeAuthorization
