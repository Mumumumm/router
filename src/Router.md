npm install react-router-dom 라우터 설치
a태그에 href"/home" / 이후 경로명을 적어준다

index.js 로 이동해서
import { BrowserRouter } from 'react-router-dom';
 <BrowserRouter> 로 <App /> 감싸주기

 { BrowserRouter } 경로명과 컴포넌트를 이어주는 역할

<Routes> 안에 <Route> 넣기
자동완성으로 import { Route, Routes } from 'react-router-dom'; 가 생성된다

<Route path='/home' element={<Home/>}></Route> 넣으면
path는 경로명 /home 이 들어오면
element={<Home/> 이 컴포넌트를 연결하겠다

path='' 는 이름이 달라도 상관없지만 대문자를 사용하지 말자, 주소에서 소문자로 나오기 때문에

```js
<Routes>
    <Route path='/home' element={<Home/>}></Route>
    <Route path='/topics' element={<Topics/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
</Routes>
```
를 따로 파일을 만들어 주고 App컴포넌트에 import해줄수도 있다

react에서는 a태그를 사용하지 않고 <Link to></Link>를 사용한다.
그러면 a태그의 새로고침은 안되면서 다른 경로의 화면으로 이동한다.

App 에 라우터만 남겨놓기
아까 작성한 변경되지 않을 레이아웃은 새로운 메인레이아웃 컴포넌트로 만들어 작성한뒤 Routes 에 넣어준다
<Route path='/' element={<MainLayout/>}></Route>
/ 는 현재 페이지

MainLayout 라우터를 부모로 레이아웃이 바뀌는 자식라우터들을 묶어준다.
<Outlet></Outlet> 으로 묶여진 자식 라우터를 연결시켜주는것
상황에 따라 연결시켜주는 기능

```js
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
```

MainLayout 에 대표로 들어갈 자식 컴포넌트 는 index element 사용하기
```js
 <Route index element={<Welcome/>}></Route>
 Welcome 이라는 컴포넌트를 처음 화면에 대표로 띄워준다
 ```

자식컴포넌트에 안쪽경로 추가

```js
const content=[
  {id:1, title:"Html", body:"html is ..."},
  {id:2, title:"Css", body:"css is ..."},
  {id:3, title:"JavaScript", body:"javascript is ..."},
]
안쪽 경로 먼저 생성

function Topics(){
  const list =[];
  for(let t of content){
    list.push(<li><Link to={'/topics/'+t.id}>{t.title}</Link></li>);
  }
  return(
    <>
    <h2>Topics</h2>
    <p>{list}</p>
    </>
  );
};

{list} 에 묶어 넣기
```


Topics 에 자식 경로 넣는법
```js
<Route path='/topics' element={<Topics/>}>
    <Route path='/topics/:topicid' element={<Topic/>></Route>
</Route>

핵심은 /topics/ :topicid <-이거 (:) 뭐라도 들어오면 (topicid) 변수명 
토픽의 id topics의 자식으로 toicid가 들어갈거고 그 id를 Toipc에게 제공해서 사용한다 

<Route path='/topics/:topicid' element={<Topic/>}></Route> 가 컴포넌트 Topics에 있는 Outlet 으로 들어간다

: 또는 * 뒤에 적힌 변수명를 Topic 컴포넌트에 적용

* 아무거나 넣겠다.
: 변수명에 넣겠다.

```

 useParams(); 파라미터 들어간자리 즉 : 뒤에 들어간 것들을 가져온다

{ topicid } 객체 구조 분해 가능하다

```js
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
```








 # 이건 h1같은거
 ## 이건 h2 같은거
 ### 이건 h3 같은거

 ```코드블럭```

 1. 리스트
 2. 만드는
 3. 방법

 - 이건 ol
    - 안에 ol넣기