import {  useState } from "react";
import "./App.scss";
import axios from "axios";
function App() {
  const [city, setCity] = useState("");
  const [data, setData] = useState({});
  const [heading, setHeading] = useState("");
  const options = {
    method: "GET",
    url: "https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality",
    params: { city: `${city}` },
    headers: {
      "X-RapidAPI-Key": "4fc9c676damshcc0ced50d54a3afp110c31jsnf1771c758771",
      "X-RapidAPI-Host": "air-quality-by-api-ninjas.p.rapidapi.com",
    },
  };
  const handleSearch = async (event) => {
    if (event.key === "Enter") {
      axios
        .get(
          "https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality",
          options
        )
        .then((response) => {
          setData(response.data);
          setHeading(city);
          setCity("");
          console.log(data);
        }).catch((error)=>{console.log(error);
        setCity('')})
    }
  };

  return (
    <div className="App">
      <input
        type="text"
        width="200px"
        height="50px"
        onChange={(event) => setCity(event.target.value)}
        onKeyDown={handleSearch}
        value={city}
        placeholder="Enter City"
      />
     
        <div className="container">
          <h2 className="city-name">City : {heading}</h2>
          <h1 className="aqi">AQI : {data?.overall_aqi}</h1>
          <div className="footer">
          <div className="pm2">
            <h3>{}</h3>
          </div>
          <div className="pm10"></div>
          <div className="SO2"></div>
          <div className="CO">
            <h3>{data?.CO?.concentration}</h3>
          </div>
          </div>
        </div>
      
    </div>
  );
}

export default App;
