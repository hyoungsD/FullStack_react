
// npm install redux react-redux
// npm i @reduxjs/toolkit react-redux

import './App.css'
import { Provider } from 'react-redux'
import Display from './Display'
import Counter from './Counter'
import { store } from './store'



function App() {

  return (
    <>
      <Provider store={store}>
        <Display />
        <Counter />
      </Provider>
    </>
  )
}

export default App
