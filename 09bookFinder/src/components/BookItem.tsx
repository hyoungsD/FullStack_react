import { useContext } from 'react';
import type { Book } from '../types/Book';
import BookContext from '../contexts/BookContext';
import '../css/BookItem.css'

interface BookItemProps {
  book: Book;
}

export default function BookItem({book}:BookItemProps ) {
  const context = useContext(BookContext);
  if(!context) throw new Error('Context가 없습니다');
  const {selectBook} = context;

  return (
    <div className='book-item' onClick={() => selectBook(book)}>
      <img src={book.thumbnail} alt={`${book.title}의 표지`} />
      <div className='book-info'>
        <h3>{book.title}</h3>
        <p>{book.authors.join(', ')}</p>
      </div>
    </div>
  )
}
