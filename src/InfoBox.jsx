import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import './InfoBox.css'
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({info}) {
  const INIT_URL =
    "https://images.unsplash.com/photo-1680352267694-a7fd4c33d4e1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const RAIN_URL="https://images.unsplash.com/photo-1511634829096-045a111727eb?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const SNOW_URL="https://images.unsplash.com/photo-1477601263568-180e2c6d046e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const HOT_URL="https://images.unsplash.com/photo-1534629938736-b1b076531d3b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
 
  return (
    <div className="infoBox">
    <div className="cardContainer">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia sx={{ height: 140 }} image={info.humidity>80?RAIN_URL: info.temp>15?HOT_URL:SNOW_URL} title="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           <p> {info.city} {info.humidity>80?<ThunderstormIcon/>: info.temp>15?<WbSunnyIcon/>:<AcUnitIcon/>} </p>
          </Typography>
          <Typography variant="body2" color="text.secondary" component={"span"}>
            <p>Temperature: {info.temp}&deg;C</p>
            <p>Minimum Temperature: {info.temp_min}&deg;C</p>
            <p>Max Temperature: {info.temp_max}&deg;C</p>
            <p>Humidity: {info.humidity}</p>
            <p>
              The weather can be described as {info.weather} and feels like{" "}
              {info.feels_like}&deg;C
            </p>
          </Typography>
        </CardContent>
      </Card>
      </div>
    </div>
  );
}
