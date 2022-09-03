import { Routes, Route } from 'react-router-dom'

import './Header.css'
import { HeaderProps } from './Header-interface'
import HeaderBeforeAuthorization from './header-before-authorization/Header-before-authorization'
import HeaderGeneralpage from './general-header/HeaderGeneralpage'

const Header: React.FunctionComponent<HeaderProps> = () => {
  return (
    <div className='header'>
      <Routes>
        {/* <Route path="/" element={<Authorization />} /> */}
        <Route path='accountsearch' element={<HeaderBeforeAuthorization />} />
        <Route path='registration' element={<HeaderBeforeAuthorization />} />
        <Route path='generalpage' element={<HeaderGeneralpage />} />
      </Routes>
    </div>
  )
}

export default Header
