
import Authorization from "../authorization/Authorization";
import AccountSearch from "../account-search/AccountSearch";
import { Routes } from 'react-router-dom';
import { Route} from "react-router-dom";
import Registration from "../registration/Registration";

import "./Main.css"



export interface MainProps {
    type?: 'authorizationPage'|'accountSearchPage'|'registrationPage';
    className?: string;
    text?: string;
    children?: React.ReactNode;
}
const Main: React.FunctionComponent<MainProps> = ({type,className,text,children}) => {
   return(
     <div className="main">
  
    <Routes>
      <Route path='/' element = {<Authorization/>}/>
      <Route path='accountsearch' element = {<AccountSearch/>}/>
      <Route path='registration' element = {<Registration/>}/>
    </Routes>
   
  
    </div>
   )
} 

export default Main


// import Logo from "../../generic(ui)/logo/Logo";
// import Authorization from "../authorization/Authorization";
// import AccountSearch from "../account-search/AccountSearch";
// import "./Main.css"


// export interface MainProps {
//     
//     className?: string;
//     text?: string;
//     children?: React.ReactNode;
// }
// const Main: React.FunctionComponent<MainProps> = ({type,className,text,children}) => {
//    return(
//       <div>
//       <>
//     <div className={type === "authorizationPage" ? "main_authorizationPage":"main_authorizationPage-unvisible"}>
//      <div className="logo-title">
//         <Logo></Logo>
//      <span> 
//         Facebook помогает вам всегда оставаться на связи и общаться со своими знакомыми.
//      </span>
//      </div>
//     <div className="login-text">
//     <Authorization></Authorization>
//     <span className="span-first-page"> <b>Создать страницу</b> знаменитости, музыкальной группы или компании.</span>
//     </div>
//     </div>
//     </>

//     <>
//     <div className= {type === "accountSearchPage" ? "main-account-search" : "main-account-search-unvisible"}>
//     <AccountSearch></AccountSearch>
//      </div>
//     </>
//     </div>
//    )
// } 

// export default Main