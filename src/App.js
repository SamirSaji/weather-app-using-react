import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [initial_data, update_data] = useState({});

  useEffect(() => {
    async function apifunc() {
      await axios
        .get(
          "https://api.openweathermap.org/data/2.5/weather?lat=11.229592&lon=78.171158&appid=7854e53a58de1d8bcc4635736c7b63d5"
        )
        .then((response) => {
          let climatedata = {
            location: response.data.name,
            country: response.data.sys.country,
            description: response.data.weather[0].description,
            wind_speed: response.data.wind.speed,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            pressure: response.data.main.pressure,
          };

          update_data(climatedata);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    apifunc();
  }, []);

  return (
    <div className="App">
      <div className="head_container">
        <p>{initial_data.location}</p>
        <p>{initial_data.country}</p>
        <p>{initial_data.description}</p>
        <p>{initial_data.wind_speed}</p>
        <p>{initial_data.temperature}</p>
        <p>{initial_data.humidity}</p>
        <p>{initial_data.pressure}</p>
      </div>
    </div>
  );
}

export default App;
