import { useState } from 'react'
import BookContext from '../contexts/BookContext'
import type { Book } from '../types/Book'
import './BookFinder.css'
import Header from './Header'
import Footer from './Footer'
import SearchArea from './SearchArea'
import BookDetail from './BookDetail'

export default function BookFinder() {
  const [selected, setSelected] = useState<Book | null>(null);

  const selectBook = (book: Book) => {
    setSelected(book);
  }


  return (
    <BookContext.Provider value={{selectBook}}>
      <div className='BookFinder'>
        <Header />
        <div className="main-content">
          <SearchArea />
          <BookDetail book={selected} />
        </div>
        <Footer />
      </div>
    </BookContext.Provider>
  )
}
