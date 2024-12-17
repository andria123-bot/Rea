/* eslint-disable no-unused-vars */
import { useState } from 'react'

const WeatherApp = () => {
  const [ city, setCity ] = useState("");
  const [ weatherData, setWeatherData ] = useState(null);
  const [ error, setError ] = useState(null)
  
  const apiKey = "1efad97dc83ca6624b3c33ff6dbe8da2";

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!city){
      setError("Please enter a city");
      return;
    }
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    fetch(apiUrl)
          .then((response) => response.json())
          .then((data) => {
            if(data.cod === "404"){
              setError("City not found");
            } else {
              setError(null);
              setWeatherData(data);
            }
          })
          .catch((err) => {
            setError("Failed to fetch weather data");
            setWeatherData(null)
          })

  };
  return(
    <div className='weather-app'>
      <h1>Weather App</h1>
      <form onSubmit={handleSubmit}>
      <input type='text' value={city} onChange={(e) => setCity(e.target.value)} placeholder='Enter a city name'></input>
      <button type='submit'>Get Weather</button>
      </form>

      {error && <p className='error'>{error}</p>}
      
      {
        weatherData && (
          <div className='weather-info'>
            <h2>{weatherData.name}, {weatherData.sys.country}</h2>
            <p>Temperature: {Math.round(weatherData.main.temp - 273.15)}°C</p>
            <p>Weather: {weatherData.weather[0].description}</p>
          </div>
        )
      }
    </div>
  )
}

export default WeatherApp