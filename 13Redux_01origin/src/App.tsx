
import './App.css'
import { Provider } from 'react-redux'
import Display from './Display'
import CounterA from './CounterA'
import CounterB from './CounterB'
import { store } from './store'


function App() {

  return (
    <>
      <Provider store={store}>
        <Display />
        <CounterA />
        <CounterB />
      </Provider>
    </>
  )
}

export default App
