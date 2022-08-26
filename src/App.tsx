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
import ShareSomethingNewContainer from './components/generic(ui)/share-something-new-container/Share-something-new';
import CreateRoomContainer from './components/generic(ui)/create-room-container/Create-room';
import GeneralPageCentralPartHome from './components/layouts/general-page-central-part/General-page-central-part';




const App: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
     <HeaderGeneralpage/>
    <GeneralPageCentralPartHome/>
      <Main/>
    <Footer/>
    </div>
    </BrowserRouter>

  );

}



export default App;


// import { CreateNewHistoryBoxProps} from "./Create-new-history-interface";
// import './Create-new-history.css'
// import  plus from '../../../assets/image/icons/plus.svg'
// import Icon from "../icon/Icon";
// import { t } from "i18next";
// import { useTranslation } from "react-i18next";
// ;

// const CreateNewHistoryBox: React.FC<CreateNewHistoryBoxProps> = (className) => {
//     const {t} = useTranslation('translation')
//     return(
//        <div className="create-new-history__box">
//        <Icon src={plus} className='plus' />
//        <div className="create-new-history__title">
//         <p className="create-new-history__title"> {t('description.createNewHistory.title')}</p>
//         <p className="create-new-history__article"> {t('description.createNewHistory.article')}</p>
//        </div>
//        </div>
//     )
// }

// export default CreateNewHistoryBox