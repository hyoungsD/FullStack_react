import { useState } from 'react'
import type { BookTypes } from './types/Book';
import Library from './components/Library';

import './App.css'


const books: BookTypes[] = [
  {image: 'https://image.aladin.co.kr/product/38793/0/cover150/e652637255_1.jpg', title: '한입 크기로 잘라먹는 리액트', author: '이정환'},
  {image: 'https://image.aladin.co.kr/product/32860/31/cover150/e862532691_1.jpg', title: '처음 배우는 애저', author: '김도균'},
  {image: 'https://image.aladin.co.kr/product/30789/40/cover150/e322530657_1.jpg', title: 'Node.js 교과서', author: '조현영'},
]


function App() {

  return (
    <div className='wrapper'>
      <Library book={books[0]} />
      <Library book={books[1]} />
      <Library book={books[2]} />
    </div>
  )
}

export default App
