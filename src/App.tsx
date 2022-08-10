import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './components/layouts/footer/Footer';
import Header from './components/layouts/header/Header';
import Main from './components/layouts/main/Main';
import i18next from 'i18next';
//import {useTranslation,Trans} from 'react-i18next';


// const lngs = {
//   en:{nativeName:'English'},
//   ru:{nativeName: 'Русский'}
// }

const App: React.FunctionComponent = () => {
//  const {t,i18n} = useTranslation();
  return (

    <BrowserRouter>
    <div className="App">
      <Header/>
      <Main/>
    <Footer/>
    </div>
    </BrowserRouter>

  );

}



export default App;
