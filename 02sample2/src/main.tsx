// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.tsx'

const input = (
  <div className='field'>
    <label htmlFor="title">이름</label>
    <input type='text' id='' />
  </div>
)

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
    <App />
  // </StrictMode>
  // input
)