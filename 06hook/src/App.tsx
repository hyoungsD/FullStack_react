
import CCounter from './components/CCounter'
import ExUseEffect from './components/ExUseEffect'
import UserList from './components/UserList'
import UserListAsync from './components/UserListAsync'
import Counter from './components/Counter'
import CleanUpTimer from './components/CleanUpTimer'
import CleanUpEvent from './components/CleanUpEvent'
import MovieInfo from './components/MovieInfo'
import ExUseMemo from './components/ExUseMemo'
import UseMemoTest from './components/UseMemoTest'
import UseCallback from './components/UseCallback'
import ExUseRef from './components/ExUseRef'
import ExUseReducerCount from './components/ExUseReducerCount'
import ExUseReducerLogin from './components/ExUseReducerLogin'
import DarkOrLight from './components/DarkOrLight'
import CustomHook from './components/CustomHook'
import UseFetchTest from './components/UseFetchTest'
import UseFetchMovie from './components/UseFetchMovie'

import './App.css'

function App() {

  return (
    <>
      <CCounter count={0} />
      <ExUseEffect />
      <UserList />
      <UserListAsync />
      <Counter />
      {/* <CleanUpTimer /> */}
      {/* CleanUpTimer는 console.log가 많으니 숨겨둠 */}
      <CleanUpEvent />
      <MovieInfo />
      <ExUseMemo num={3} />
      <UseMemoTest />
      <UseCallback />
      <ExUseRef />
      <ExUseReducerCount />
      <ExUseReducerLogin />
      <DarkOrLight />
      <CustomHook />
      <UseFetchTest />
      <UseFetchMovie />
    </>
  )
}

export default App
