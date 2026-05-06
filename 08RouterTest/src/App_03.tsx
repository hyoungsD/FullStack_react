
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
    path: '/', // 사이트의 루트 경로 (메인 주소)
    element: <Layout />,  // 이 경로에서 공통으로 사용할 UI
    children: [   // Layout 안에서 바뀌는 페이지들
      {index: true, element: <Main />}, // '/'로 들어왔을 때 기본으로 보여줄 페이지, path: ''랑 같은 의미
      {path: 'product/*', element: <Product />},  // product로 시작하는 모든 경로
      // {path: '*', element: <NotFound />},
    ]
  },
  // 계층구조로 경로 추가 가능
  // {
  //   path: '/user'
  //   element: <UserLayout />,
  //   children: [
  //      { path: 'login', element: <Login /> },
  //      { path: 'mypage', element: <MyPage /> },
  //    ]
  // },
  { // 따로 넣으면 Header 없이 404 페이지만 보여줌
    path: '*',
    element: <NotFound />
  }
])


function App() {

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
