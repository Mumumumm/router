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


<Routes>
    <Route path='/home' element={<Home/>}></Route>
    <Route path='/topics' element={<Topics/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
</Routes>
를 따로 파일을 만들어 주고 App컴포넌트에 import해줄수도 있다


 # 이건 h1같은거
 ## 이건 h2 같은거
 ### 이건 h3 같은거

 ```코드블럭```

 1. 리스트
 2. 만드는
 3. 방법

 - 이건 ol
    - 안에 ol넣기