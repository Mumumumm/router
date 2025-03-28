import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';

//자식 컴포넌트-------------------------------------------------------------------------------------------
function Home(){
  return(
    <>
    <h2>Home</h2>
    <p>Home is...</p>
    </>
  );
;}

function Topics(){
  return(
    <>
    <h2>Topics</h2>
    <p>topics is...</p>
    </>
  );
};

function Contact(){
  return(
    <>
    <h2>Contact</h2>
    <p>contact is...</p>
    </>
  );
};

//부모 컴포넌트-------------------------------------------------------------------------------------------
function App() {
  return (
    <div className="App">
      <h1>Hello React Router</h1>
      <ul>
        <li><a href='/home' >Home</a></li>
        <li><a href='/topics'>Topics</a></li>
        <li><a href='/contact'>Contact</a></li>
      </ul>

      <Routes>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/topics' element={<Topics/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
