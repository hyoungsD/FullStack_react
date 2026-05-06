
import './App.css'
import {Header, Main, Product, NotFound} from './components';

// 터미널에서 router 설치하기
// npm i react-router-dom

// Layout 사용한 예
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <Header />  {/* 모든 페이지에서 공통으로 보임 */}
      <Outlet />  {/* 자식 라우트가 렌더링되는 자리 */} 
    </>
  )
}


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
        { index: true, element: <Main /> },
        { path: 'product/:id', element: <Product /> },
        { path: '*', element: <NotFound /> },
     ]
  },
])


function App() {

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
