import { useState } from 'react'
import Input from './components/Input';
import WeatherCard from './components/WeatherCard';
import './index.css';


function App() {

  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const apiKey = import.meta.env.VITE_WEATHER_KEY;
  
  
  const handleSearch = async () => {
    if (!city){
      setWeather(null);
      return
    };

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      
      const data = await res.json();
      setWeather(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <h1 className="title">Basic Weather App</h1>
      <Input city={city} setCity={setCity} handleSearch={handleSearch} />
      <WeatherCard weather={weather} />
    </div>
  )
}

export default App
