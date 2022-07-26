import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './components/layouts/footer/Footer';
import Header from './components/layouts/header/Header';
import Main from './components/layouts/main/Main';




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
