import Authorization from '../authorization/Authorization'
import AccountSearch from '../account-search/AccountSearch'
import { Routes, Route } from 'react-router-dom'
import Registration from '../registration/Registration'

import './Main.css'
import { MainProps } from './Main-interface'
import GeneralPageCentralPartHome from '../general-page-central-part/General-page-central-part'
import React from 'react'
import FriendsNavigationContainer from '../friends-navigation/Friends-navigation'

const Main: React.FunctionComponent<MainProps> = () => {
  return (
    <div className='main'>
      <Routes>
        <Route path='/' element={<Authorization />} />
        <Route path='accountsearch' element={<AccountSearch />} />
        <Route path='registration' element={<Registration />} />
        <Route path='generalpage' element={<GeneralPageCentralPartHome />} />
        <Route path='friends' element={<FriendsNavigationContainer/>} />
      </Routes>
    </div>
  )
}

export default Main
