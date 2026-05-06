import { useRef } from 'react'
import '../css/SearchBar.css'

interface SearchBarProps {
  onChangeQuery: (q:string) => void;
  resetPage: () => void;
}

export default function SearchBar({onChangeQuery, resetPage}:SearchBarProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearchClick = () => {
    // input의 value를 onChanquery에 넣어준다
    if(!inputRef.current) return;
    onChangeQuery(inputRef.current.value);
    resetPage();
  }

  return (
    <div className='search-bar'>
      <input 
        type="text" 
        placeholder='검색어를 입력하세요' 
        ref={inputRef} 
      />
      <button onClick={handleSearchClick}>검색</button>
    </div>
  )
}
