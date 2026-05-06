import { useEffect, useState } from 'react'
import type { Book, ApiResponse } from '../types/Book'
import useFetch from '../hooks/useFetch';
import SearchBar from './SearchBar';
import BookList from './BookList';
import Pagination from './Pagination';
import '../css/SearchArea.css'

export default function SearchArea() {
  // const [documents, setDocuments] = useState<Book[]>([]);
  const [query, setQuery] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  // const [isEnd, setIsEnd] = useState<boolean>(false);

  const url = 'https://dapi.kakao.com/v3/search/book';
  const apiKey = 'KakaoAK c54da258000ec8e37bc74417349d8d62';
  const {documents, isEnd} = useFetch<Book>(query, page, url, apiKey);

  // query 전달 함수: SearchBar에서 사용
  const onChangeQuery = (q:string) => {
    setQuery(q);
    // setPage(1);
  }

  // page 전달 함수: Pagination에서 사용
  const onClickPrev = () => {
    setPage((p) => p - 1 );
  }
  const onClickNext = () => {
    setPage((p) => p + 1);
  }

  // page Reset
  const resetPage = () => {
    setPage(1);
  } 

  // useEffect(() => {
  //   if(!query) return;  // query가 없으면 리턴
  //   const fetchBook = async () => {
  //     try{
  //       // 한글 url이 가능하도록 인코딩
  //       const encodedQuery = encodeURIComponent(query);
  //       const endPoint = `https://dapi.kakao.com/v3/search/book?query=${encodedQuery}&page=${page}`;
  //       const response = await fetch(endPoint, {headers: {
  //         Authorization: 'KakaoAK c54da258000ec8e37bc74417349d8d62',
  //       }})
  //       if(!response.ok){
  //         throw new Error(`HTTP error! ${response.status}`);
  //       }
  //       const data:ApiResponse<Book> = await response.json();
  //       setDocuments(data.documents);
  //       setIsEnd(data.meta.is_end);
  //     }catch(err) {
  //       console.error('검색중 오류', err);
  //     }
  //   }
  //   fetchBook();
  // }, [query, page])

  return (
    <div className='search-area'>
      <SearchBar onChangeQuery={onChangeQuery} resetPage={resetPage} />
      <BookList books={documents} />
      <Pagination page={page} handlePrev={onClickPrev} handleNext={onClickNext} isEnd={isEnd} />
    </div>
  )
}
