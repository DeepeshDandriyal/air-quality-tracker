import { useEffect, useState } from "react";
import "./App.css";
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
        });
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
      {data ? (
        <div>
          <h2>{heading}</h2>
          <h1>{data?.overall_aqi}</h1>
        </div>
      ) : (
        <h1>Enter valid city name</h1>
      )}
    </div>
  );
}

export default App;
