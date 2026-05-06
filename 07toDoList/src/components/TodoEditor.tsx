import { useRef, useState } from 'react';
import './TodoEditor.css';

interface TodoEditorProps {
  onCreate:(content: string) => void;
}

function TodoEditor({onCreate}: TodoEditorProps) {
  const [content, setContent] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);  // onSubmit에 사용
  const [isComposing, setIsComposing] = useState(false); // IME 활성 상태 추적

  // IME 입력 시작
  const handleCompositionStart = () => {
    setIsComposing(true);
  };
  // IME 입력 종료
  const handleCompositionEnd = () => {
    setIsComposing(false);
  };

  const onChangeContent = (e:React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  }

  // onClick이랑 타입이 다르기 때문에 onSubmit으로 새로 만들어줌
  // onClick의 타입은 (void) => void
  const onSubmit = () => {
    // content내용이 비어있다면 input에 focus주기
    if(!content) {
      inputRef.current?.focus();  // null일 수도 있기 때문에 '?' 추가
      return;
    }

    if (!isComposing) { // IME 확인 후 변경(한글입력 시 오류 방지)
      onCreate(content);
      setContent(''); // content 초기화
    }
  }

  // input 작성 후 'Enter'키로 등록
  const onKeyDown = (e:React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === 'Enter') { // Enter키를 눌렀을 때
      onSubmit();
    }
  }

  return (
    <div className='todoeditor'>
      <h4>새로운 Todo 작성하기 ✏️</h4>
      <div className='editor-wrapper'>
        <input
          type="text"
          placeholder='새로운 Todo를 입력하세요' 
          onChange={onChangeContent} 
          ref={inputRef}  // 접근해서 focus 주기 위해 사용
          onKeyDown={onKeyDown}
          value={content}
          onCompositionStart={handleCompositionStart} // IME 입력 시작
          onCompositionEnd={handleCompositionEnd} // IME 입력 종료
        />
        <button onClick={onSubmit}>추가</button>
      </div>
    </div>
  )
}

export default TodoEditor