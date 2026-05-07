import useWeather from '../hooks/useWeather';
import './ForeCast.css'


interface ForeCastItem {
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
  };
  weather: {
    main: string;
    description: string;
    icon: string
  }[];
  dt: number;
  dt_txt: string;
}

interface ForeCastType {
  list : ForeCastItem[];
  city: {
    name: string;
    country: string;
  }
}

export default function ForeCast() {


  const appid = import.meta.env.VITE_OPEN_WEATER_KEY;
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=seoul&appid=${appid}&units=metric&lang=kr`;
  

  const {data, loading} = useWeather<ForeCastType>(url);
  console.log(data);

  if(loading) return <p>loading...</p>;
  if(!data) return;


  const {list, city} = data;

  const daily = list.filter((item) =>
    item.dt_txt.includes("12:00:00")
  )

  return (
    <ul className="forecast-wrap">
      {daily.map((item) => (
        <li key={item.dt}>
          <p className="date">{item.dt_txt.split(" ")[0].slice(5)}</p>          
          <img src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`} alt='weather icon' />
          <p className="temp">{item.main.temp.toFixed(1)}℃</p>
          <p className="description">{item.weather[0].description}</p>
        </li>
      ))}
    </ul>
  )
}
