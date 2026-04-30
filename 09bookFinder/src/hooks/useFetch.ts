import { useState, useEffect } from "react";
import type { ApiResponse } from "../types/Book";


export default function useFetch<T> (
  query: string, 
  page: number, 
  url: string, 
  apiKey: string
) {
  const [documents, setDocuments] = useState<T[]>([]);
  const [isEnd, setIsEnd] = useState<boolean>(false);

  useEffect(() => {
    if(!query) return;  // query가 없으면 리턴
    const fetchBook = async () => {
      try{
        // 한글 url이 가능하도록 인코딩
        const encodedQuery = encodeURIComponent(query);
        const endPoint = `${url}?query=${encodedQuery}&page=${page}`;
        const response = await fetch(endPoint, {headers: {Authorization: apiKey}})
        if(!response.ok){
          throw new Error(`HTTP error! ${response.status}`);
        }
        const data:ApiResponse<T> = await response.json();
        setDocuments(data.documents);
        setIsEnd(data.meta.is_end);
      }catch(err) {
        console.error('검색중 오류', err);
      }
    }
    fetchBook();
  }, [query, page, url, apiKey])

  // 상태로 관리해야할 것들을 내려주기
  return {documents, isEnd};
}

