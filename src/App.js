import React, {useState} from 'react'
import logo from './logo.svg';
import './App.scss';
import './css/global.scss';
import NavMenu from "./components/navMenu/navMenu"
import Form from "./components/Form/Form"
import Question from "./components/Question/Question"




function App() {

  const [Nav, SetNav] = useState([
  {
    id: 1,
    name:'о бренде',
    link: 'dsdfg',
  },
  {
    id: 2,
    name:'ответственность',
    link: 'nbvn',
  },
  {
    id: 3,
    name:'где купить',
    link: 'cvbnt',
  },
  {
    id: 4,
    name:'поддержка',
    link: 'rtyherty',
  },
  {
    id: 5,
    name:'ДистрибьютерАМ',
    link: 'bncbn',
  },
  ])



  return (
    <div className="App">
    <header> 
    <div className="header-container">
    <div className="wrap-header-content">
    <div className="logo">
    <a href="#">
    <img src={logo} alt="" />
    </a>
    </div>







    <NavMenu
    Nav = {Nav}
    />
     






    </div>
    </div>

    </header>
    <main>
    <div className="main-container">
    
    <Form/>
    <Question/>

    </div>
    </main>
    </div>
    );
}

export default App;
