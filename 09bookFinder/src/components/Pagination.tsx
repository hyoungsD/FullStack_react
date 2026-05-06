
import '../css/Pagination.css'

interface PaginationProps {
  page: number;
  isEnd: boolean;
  // setPage: ReactDispatch<React.SetStateAction<number>> // 타입이 복잡해짐
  handlePrev: () => void;
  handleNext: () => void;
}

export default function Pagination({page, isEnd, handlePrev, handleNext}:PaginationProps ) {

  return (
    <div className='pagination'>
      <button onClick={handlePrev} disabled={page === 1}>이전</button>
      <span>{page}</span>
      <button onClick={handleNext} disabled={isEnd}>다음</button>
    </div>
  )
}
