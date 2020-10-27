import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { Grid } from "@material-ui/core/";
import LocationSearchInput from "./component/userlocation";
function App(props) {
  const [initial_location, update_location] = useState({
    lat: "",
    lng: "",
  });

  const [initial_data, update_data] = useState({
    description: "",
    temperature: "",
    location: "",
    country: "",
    wind_speed: "",
    humidity: "",
    pressure: "",
  });

  const onLocation = (data) => {
    let locationData = {
      lat: data.lat,
      lng: data.lng,
    };

    update_location(locationData);
  };

  useEffect(() => {
    async function apifunc(props) {
      await axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${initial_location.lat}&lon=${initial_location.lng}&appid=7854e53a58de1d8bcc4635736c7b63d5`
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
    if (initial_location.lat !== "") {
      apifunc();
    }
  }, [initial_location]);

  return (
    <div className="App ">
      <Grid className="head_container" container>
        {initial_location.lat !== "" ? (
          <Grid item xs={12} className="main_grid">
            {initial_data.description === "" ? (
              ""
            ) : (
              <>
                <p className="description_text">{`${
                  initial_data.description
                }  ( ${Math.round(initial_data.temperature - 273.15)}°C ) `}</p>
                <p className="country_text">{`${initial_data.location}, ${initial_data.country}`}</p>
              </>
            )}

            <Grid className="content_grid">
              {initial_data.wind_speed === "" ? (
                ""
              ) : (
                <>
                  {" "}
                  <Grid item xs={4}>
                    <p className="extra_content">{initial_data.wind_speed}</p>
                    <p className="extra_heading">Wind Speed</p>{" "}
                  </Grid>
                </>
              )}

              {initial_data.humidity === "" ? (
                ""
              ) : (
                <>
                  {" "}
                  <Grid item xs={4}>
                    <p className="extra_content">{initial_data.humidity}</p>
                    <p className="extra_heading">Humidity</p>
                  </Grid>
                </>
              )}

              {initial_data.pressure === "" ? (
                ""
              ) : (
                <>
                  {" "}
                  <Grid item xs={4}>
                    <p className="extra_content">{initial_data.pressure}</p>
                    <p className="extra_heading">Pressure</p>{" "}
                  </Grid>
                </>
              )}
            </Grid>
          </Grid>
        ) : (
          ""
        )}

        <Grid item xs={10} sm={8} md={4} className="searchbar_grid">
          <LocationSearchInput onLocation={onLocation} />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
