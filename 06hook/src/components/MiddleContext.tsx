
import MainContext from './MainContext';

export default function MiddleContext() {
  return (
    <div style={{ backgroundColor: 'gray', padding: '20px' }}>
      <h3>이 곳은 MiddleContext입니다</h3>
      <MainContext />
    </div>
  )
}
