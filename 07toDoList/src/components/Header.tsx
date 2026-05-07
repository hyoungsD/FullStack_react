import './Header.css';
import WeatherCard from './WeatherCard';
import ForeCast from './ForeCast';

function Header() {
  return (
    <div className='header'>
      <h3>오늘은 🗓️</h3>
      <div className='today-container'>
        <h1>{new Date().toDateString()}</h1>
        <WeatherCard />
      </div>
      <ForeCast />
    </div>
  )
}

export default Header