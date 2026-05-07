import React from 'react';
import './Header.css';

function Header() {
  console.log('-- Header 업데이트 --');

  return (
    <div className='header'>
      <h3>오늘은 🗓️</h3>
      <h1>{new Date().toDateString()}</h1>
    </div>
  )
}

// todos가 바뀔 때마다 Header도 리랜더링되니까 React.memo()로 감싸기
export default React.memo(Header)