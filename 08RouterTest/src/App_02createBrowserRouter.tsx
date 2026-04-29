
import './App.css'
import {Header, Main, Product, NotFound} from './components';

// 터미널에서 router 설치하기
// npm i react-router-dom


// createBrowserRouter를 사용한 예
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
const router = createBrowserRouter([
  {path: '/', element: (
    <>
      <Header/><Main/>
    </>
  )},
  {path: '/product/*', element: (
    <>
      <Header/><Product/>
    </>
  )},
  {path: '*', element: (
    <>
      <Header/><NotFound/>
    </>
  )},
])


function App() {

  return (
    // createBrowserRouter를 사용한 예
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
