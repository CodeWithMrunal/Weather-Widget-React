import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp() {
    let [weatherInfo,setWeatherinfo]=useState({
        city: "Delhi",
        temp: 123,
        temp_min: 122,
        temp_max: 124,
        humidity: 83,
        feels_like: 123,
        weather: "haze",
      })

      let updateInfo=(newInfo)=>{
        setWeatherinfo(newInfo);
      }
  return (
    <div>
      <h1>Weather App by Mrunal</h1>
      <SearchBox updateInfo={updateInfo}/>
      <InfoBox info={weatherInfo}/>
    </div>
  );
}
