import type { BookTypes } from '../types/Book'
import './Library.css'

interface BookProps {
  book: BookTypes;
}

function Book({book}: BookProps) {
  const { image, title, author } = book;

  return (
    <div className='book-card'>
      <img src={image} alt={title} className='book-image' />
      <h2 className='title'>{`이 책의 이름은 ${title}입니다.`}</h2>
      <p className="author">{`이 책의 저자는 ${author}입니다.`}</p>
    </div>
  );
}
export default Book;
