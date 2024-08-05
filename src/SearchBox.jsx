import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';


export default function SearchBox({updateInfo}){
    let [city,setCity]=useState("");
    let [error,setError]=useState(false);
    const API_URL="https://api.openweathermap.org/data/2.5/weather"
    const API_KEY="add170ab963ea7a9d8b4e43d056a8438"
    let weatherCall=async()=>{
        try{
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
        let jsonResponse=await response.json();
        console.log(jsonResponse);
        let result= {
            city:city,
            temp:jsonResponse.main.temp,
            temp_min:jsonResponse.main.temp_min,
            temp_max:jsonResponse.main.temp_max,
            humidity:jsonResponse.main.humidity,
            feels_like:jsonResponse.main.feels_like,
            weather:jsonResponse.weather[0].description
        }
        console.log(result);
        await updateInfo(result)
        setError(false);
    }catch(err){
        setError(true);
    }}

    let handleSubmit=(evt)=>{
        try{
        evt.preventDefault();
        console.log(city);
        setCity("");
        weatherCall();
        setError(false);
    }
catch(err){
    setError(true);
}
}

    let handleChange=(evt)=>{
        setCity(evt.target.value);
    }

    return(
        <div>
           <form onSubmit={handleSubmit}>
           <TextField id="city" label="City Name" value={city} onChange={handleChange} variant="outlined" required/>
           <br /><br />
           <Button variant="contained" type='submit'>Submit</Button>
           {error?<p>No such place exists in our API</p>:null}
           </form>
        </div>
    );
}