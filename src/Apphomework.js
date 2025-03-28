import { Link, Outlet, Route, Routes, useParams } from 'react-router-dom';
import logo from './logo.svg';



function Home(){

    return(
        <>
        <h2>Home</h2>
        <p>home is ....</p>
        </>
    );
};
const topic = [
    {id:1, title:"Html", body:"html is ..."},
    {id:2, title:"Css", body:"css is ..."},
    {id:3, title:"JavaScript", body:"javascript is ..."},
];

function Topic(){

    return(
        <>
        </>
    );
}


function Topics(){
    // 빈배열에 topic 변수로 만들어 놓은 배열객체 넣기
    const list = [];
    for(let t of topic){
        list.push(<li><Link to={'/linknametopic/'+ t.id}></Link></li>);
    }
    return(
        <>
        <h2>Topic</h2>
        {/* list 로 객체들을 출력하기 */}
        <p>{list}</p>
        </>
    );
};

function Content(){
    return(
        <>
        <h2>content</h2>
        <p>content is....</p>
        </>
    );
}

function Mainworld(){

    return (
        <>
            <h2>pront world</h2>
            <ul>
                <li><Link to='/home' element={<Home/>}>home</Link></li>
                <li><Link to='/topic' element={<Topics/>}>topic</Link></li>
                <li><Link to='/content' element={<Content/>}>content</Link></li>
            </ul>
            <Outlet/>
        </>
    );
};

function World(){
    return(
        <>
            <h2>Main World</h2>
            <p>world to go</p>
        </>
    );
}

function Apphomework(){

    return(
        <>
        <h1>Hello world</h1>
        <Routes>
            {/* 부모라우터로 자식라우터 묶어주기 */}
            <Route path='/' element={<Mainworld/>}> 
                <Route index element={<World/>}></Route>
                <Route path='/home' element={<Home/>}></Route>
                <Route path='/topic' element={<Topics/>}>
                    <Route path='/topic/:topicid' element={<Topic/>}></Route>
                </Route>
                <Route path='/content' element={<Content/>}></Route>
            </Route>
        </Routes>
        </>
    );
};









export default Apphomework;