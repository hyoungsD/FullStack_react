import type { BookTypes } from '../types/Book'
import Book from './Book';
import './Library.css'

interface BookProps {
  book: BookTypes;
}


function Library({book}: BookProps){

  return (
    <Book book={book} />
  )
}

export default Library;
