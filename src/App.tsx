import React from 'react';
import './App.css';
import AccountSearch from './components/layouts/account-search/AccountSearch';
//mport FirstPage from './components/page/first-page/First-page';
//import Main from './components/page/first-page/main/Main';
//import Authorization from './components/layouts/authorization/Authorization-block';

// import Button from './components/generic(ui)/buttons/Button';
// import Input from './components/generic(ui)/inputs/Input';
// import Logo from './components/generic(ui)/logo/Logo';
//import SecondPage from './components/page/second-page/Second-page';

function App() {
  return (
    <div className="App">
<AccountSearch></AccountSearch>
    </div>
  );
}

// const string: string = 'String';
// const number: string = '777';

// function stringFunction (string1: string,string2: string): string {
//    return  string1  + string2
// }


//const result: string = stringFunction(string,number)

// interface Card {
//   title: string;
//   rating: number;
//   poster: string;
// }

//const card: Card = {title:'Hello', rating: 7.1,poster: 'src'}



// interface User {
//      id: number;
//      info: UserInfo;
//      admin?: boolean;
// }

// interface UserInfo {
//   age: number;
//   name: string;
//   location: string;
// }


// const user1:User = {id:12244,info:{
//   age:22,
//   name:'Bob',
//   location:'minsk'
// }}

export default App;
