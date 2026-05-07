import { useEffect, useState } from 'react'
import useWeather from '../hooks/useWeather';
import './WeatherCard.css'


interface WeatherData {
  name: string;
  weather: {
    description: string;
    icon: string;
  }[];
  main: {
    temp: number;
  };
}


export default function WeatherCard() {

  // const appid = import.meta.env.VITE_OPEN_WEATER_KEY;
  // const url = `https://api.openweathermap.org/data/2.5/weather?q=seoul&appid=${appid}&units=metric&lang=kr`;
  
  // const {data, loading} = useWeather<WeatherData>(url);
  // console.log(data);

  // if(loading) return <p>loading...</p>;
  // if(!data) return;

  // const {name, weather, main} = data;
  // const {description, icon}= weather[0];
  // const {temp} = main;




  // 
  // useState
  const [cWeather, setCWeather] = useState<WeatherData | null>(null);


  // useEffect(() => {
  //   const fetchWeather = async () => {
  //     try{
  //       const appid = 'ff942b64b1a4e7e8f778514925ec6740';
  //       const url = `https://api.openweathermap.org/data/2.5/weather?q=seoul&appid=${appid}&units=metric&lang=kr`;
        
  //       const res = await fetch(url);
  //       if(!res.ok){
  //         throw new Error(`HTTP error! ${res.status}`);
  //       }
  //       const data = await res.json();
  //       setCWeather(data);
  //     }catch(err){
  //       console.error(err);
  //     }
  //   }
  //   fetchWeather();
  // }, []);


  // navigator : 현재 위치 가져오기
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        const appid = import.meta.env.VITE_OPEN_WEATER_KEY;
        const url = `https://api.openweathermap.org/data/2.5/weather?&appid=${appid}&units=metric&lang=kr&lat=${lat}&lon=${lon}`;
        
        const response = await fetch(url);
        if(!response.ok){
          throw new Error(`HTTP error! ${response.status}`);
        }
        const data = await response.json();
        setCWeather(data);
      },
      (error) => {
        console.log(error);
      }
    )
  }, []);
  

  if(!cWeather) return;

  const icon = cWeather.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${icon}.png`;
  const description = cWeather.weather[0].description;
  const temp = cWeather.main.temp.toFixed(1);
  
  // const {name, weather, main} = cWeather;
  // const {description, icon}= weather[0];
  // const {temp} = main;
  // const iconUrl = `https://openweathermap.org/img/wn/${icon}.png`;


  return (
    <div className='weather-container'>
      <img src={iconUrl} alt='weather icon' />
      <span>{description}</span>
      <span>({temp}℃)</span>
    </div>
  )
}
