import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './components/layouts/footer/Footer';
import Header from './components/layouts/header/Header';
import Main from './components/layouts/main/Main';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import HeaderAutopage from './components/layouts/header/my-page-header/HeaderAutopage';




const App: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
    <div className="App">
     <HeaderAutopage/>
      <Main/>
    <Footer/>
    </div>
    </BrowserRouter>

  );

}



export default App;
