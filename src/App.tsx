import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Footer from './components/layouts/footer/Footer'
import Header from './components/layouts/header/Header'
import Main from './components/layouts/main/Main'

const App: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Main />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
