
export default function Child({value}: {value: number}) {
  console.log('Child 렌더링')

  return (
    <div>Child : {value}</div>
  )
}


