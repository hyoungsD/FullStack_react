
interface ButtonProps{
  index: number;
  onChangeIndex : (newIndex: number) => void;
}

export default function Navigation({index, onChangeIndex}: ButtonProps) {
  const handlePrev = () => onChangeIndex(index - 1);
  const handleNext = () => onChangeIndex(index + 1);

  return (
    <div className='button-container'>
      <button onClick={handlePrev} className="nav">이전</button>
      <button onClick={handleNext} className="nav">다음</button>
    </div>
  )
}
