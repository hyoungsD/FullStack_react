import React from 'react'

function Child1({value}: {value: number}){
  console.log('ChildWithMemo 렌더링');
  return (
    <div>ChildWithMemo : {value}</div>
  )
}
const ChildWithMemo = React.memo(Child1);
export default ChildWithMemo;
