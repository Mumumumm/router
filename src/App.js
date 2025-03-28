import logo from './logo.svg';
import './App.css';
import { Link, Outlet, Route, Routes, useNavigate, useParams } from 'react-router-dom';

//자식 컴포넌트-------------------------------------------------------------------------------------------
function Home(){
  return(
    <>
    <h2>Home</h2>
    <p>Home is...</p>
    </>
  );
;}

// Topics에 content 배열객체 추가하기
const content=[
  {id:1, title:"Html", body:"html is ..."},
  {id:2, title:"Css", body:"css is ..."},
  {id:3, title:"JavaScript", body:"javascript is ..."},
]

function Topic(){
  const { topicid } = useParams(); // useParams() 로 파라미터를 다 가져와 topicid에 구조분해
  const topic = content.find((t)=>t.id === Number(topicid)); //  topicid 의 넘버와 content의 id 를 find로 하나만 찾아 비교 topic에 대입
  return(
    <>
    <h3>{topic.body}</h3>
    </>
  );
};

function Topics(){
  const list =[];
  for(let t of content){
    list.push(<li><Link to={'/topics/'+t.id}>{t.title}</Link></li>);
  }
  return(
    <>
    <h2>Topics</h2>
    <ul>
      {list}
    </ul>
    <Outlet />
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
  const navigate = useNavigate();
  return(
    <>
      <h1>Hello React Router</h1>
      <ul>
        <li><Link to='/home' >Home</Link></li>
        <li><Link to='/topics'>Topics</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
      </ul>
      <Outlet/>
      <button onClick={(e)=>{
        navigate("/") // 클릭 하면 해당경로도 이동 콜백 현재는 <Route path='/' element={<MainLayout/>}>이거
      }}>집으로</button>
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
          <Route path='/topics' element={<Topics/>}>
            <Route path='/topics/:topicid' element={<Topic/>}></Route>
          </Route>
          <Route path='/contact' element={<Contact/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;


{/* <Route index element={<Welcome/>}></Route> 대표 자식 라우터
<Route path='/home' element={<Home/>}></Route> 자식
<Route path='/topics' element={<Topics/>}></Route> 자식
<Route path='/contact' element={<Contact/>}></Route> 자식 */}