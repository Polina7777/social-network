import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './components/layouts/footer/Footer';
import Header from './components/layouts/header/Header';
import Main from './components/layouts/main/Main';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import HeaderGeneralpage from './components/layouts/header/general-header/HeaderGeneralpage';
import CreateNewHistoryBox from './components/layouts/create-new-history-container/Create-new-history';
import ShareSomethingNewContainer from './components/layouts/share-something-new-container/Share-something-new';
import CreateRoomContainer from './components/layouts/create-room-container/Create-room';
import GeneralPageCentralPartHome from './components/layouts/general-page-central-part/General-page-central-part';




const App: React.FunctionComponent = () => {
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



