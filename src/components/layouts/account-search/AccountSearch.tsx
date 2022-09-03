import './AccountSearch.css'
import Button from '../../generic(ui)/buttons/Button'
import Input from '../../generic(ui)/inputs/Input'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { AccountSearchProps } from './AccountSearch-interface'
import { useTranslation } from 'react-i18next'
import i18n from '../../../i18n/i18n'

const AccountSearch: React.FunctionComponent<AccountSearchProps> = () => {
  const { t } = useTranslation('translation')
  const [login, setLogin] = useState('')
  const buttonEvent = () => {
    const body = { login }
    console.log(body)
  }

  return (
    <div className='account-search'>
      <h3 className='account-search__title'>{t('description.accountSearch.accountSearchTitle')}</h3>
      <h3 className='account-search__text'> {t('description.accountSearch.accountSearchText')} </h3>
      <Input
        type='text'
        setValueHandler={setLogin}
        className='account-search__box'
        inputClassName='account-search_input'
        placeholder={t('description.authorization.loginPlaceholder')}
      ></Input>
      <div className='account-search__buttons'>
        <Link to='/' className='button-link'>
          <Button color='light' className='account-search__button'>
            {' '}
            {t('description.accountSearch.cancel')}{' '}
          </Button>
        </Link>
        <Button color='blue' buttonEventHandler={buttonEvent} className='account-search__button'>
          {t('description.accountSearch.search')}
        </Button>
      </div>
      <Button
        color='green'
        className='change-language_button'
        buttonEventHandler={() => i18n.changeLanguage('en')}
      >
        EN
      </Button>
      <Button
        color='green'
        className='change-language_button'
        buttonEventHandler={() => i18n.changeLanguage('ru')}
      >
        RU
      </Button>
      <Button
        color='green'
        className='change-language_button'
        buttonEventHandler={() => i18n.changeLanguage('de')}
      >
        DE
      </Button>
      <Button
        color='green'
        className='change-language_button'
        buttonEventHandler={() => i18n.changeLanguage('pl')}
      >
        PL
      </Button>
    </div>
  )
}

export default AccountSearch
