
import './App.css'
import {Header, Main, Product, NotFound} from './components';

// 터미널에서 router 설치하기
// npm i react-router-dom

// BrowserRouter를 사용한 예
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <BrowserRouter> {/* 최상위에 BrowserRouter */}
      <Header />

      <Routes>  {/* 경로에 따라 바뀔 부분 Routes로 묶어준다 */}
        <Route path='/' element={<Main />} />
        <Route path='/product/*' element={<Product />} />
        {/* path='/product/*' : *에 id가 들어간다 */}
        <Route path='*' element={<NotFound />} /> {/* *: 위에 설정하지 않은 모든 페이지 */}
      </Routes>
    </BrowserRouter>

  )
}

export default App
