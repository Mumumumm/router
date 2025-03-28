import logo from './logo.svg';
import './App.css';
import { Link, Outlet, Route, Routes } from 'react-router-dom';

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

function MainLayout(){
  return(
    <>
      <h1>Hello React Router</h1>
      <ul>
        <li><Link to='/home' >Home</Link></li>
        <li><Link to='/topics'>Topics</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
      </ul>
      <Outlet/>
    </>
  )
}

function Welcome(){
  return(
    <>
    <h2>Welcome Router world</h2>
    <p>Welcome to world...</p>
    </>
  );
};

//부모 컴포넌트-------------------------------------------------------------------------------------------
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<MainLayout/>}>
          <Route index element={<Welcome/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/topics' element={<Topics/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
