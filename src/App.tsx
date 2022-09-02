import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './components/layouts/footer/Footer';
import Header from './components/layouts/header/Header';
import Main from './components/layouts/main/Main';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import HeaderGeneralpage from './components/layouts/header/general-header/HeaderGeneralpage';
import CreateNewHistoryBox from './components/generic(ui)/create-new-history-container/Create-new-history';




const App: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
     <HeaderGeneralpage/>
     <CreateNewHistoryBox/>
      <Main/>
    <Footer/>
    </div>
    </BrowserRouter>

  );

}



export default App;



