// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "../App.css";
// import { Grid } from "@material-ui/core/";

// function Weather(props) {
//   let data = props;
//   const [initial_data, update_data] = useState({
//     description: "",
//     temperature: "",
//     location: "",
//     country: "",
//     wind_speed: "",
//     humidity: "",
//     pressure: "",
//   });

//   useEffect(() => {
//     async function apifunc() {
//       await axios
//         .get(
//           `https://api.openweathermap.org/data/2.5/weather?lat=${data.lat}&lon=${data.lng}&appid=7854e53a58de1d8bcc4635736c7b63d5`
//         )
//         .then((response) => {
//           console.log(response);
//           let climatedata = {
//             location: response.data.name,
//             country: response.data.sys.country,
//             description: response.data.weather[0].description,
//             wind_speed: response.data.wind.speed,
//             temperature: response.data.main.temp,
//             humidity: response.data.main.humidity,
//             pressure: response.data.main.pressure,
//           };

//           update_data(climatedata);
//         })
//         .catch(function (error) {
//           console.log(error);
//         });
//     }
//     if (data === undefined) {
//       apifunc();
//     }
//   }, [data]);
//   return (
//     <div>
//       <Grid item xs={12} className="main_grid">
//         {initial_data.description === "" ? (
//           ""
//         ) : (
//           <>
//             <p className="description_text">{`${
//               initial_data.description
//             }  ( ${Math.round(initial_data.temperature - 273.15)}°C ) `}</p>
//             <p className="country_text">{`${initial_data.location}, ${initial_data.country}`}</p>
//           </>
//         )}

//         <Grid className="content_grid">
//           {initial_data.wind_speed === "" ? (
//             ""
//           ) : (
//             <>
//               {" "}
//               <Grid item xs={4}>
//                 <p className="extra_content">{initial_data.wind_speed}</p>
//                 <p className="extra_heading">Wind Speed</p>{" "}
//               </Grid>
//             </>
//           )}

//           {initial_data.humidity === "" ? (
//             ""
//           ) : (
//             <>
//               {" "}
//               <Grid item xs={4}>
//                 <p className="extra_content">{initial_data.humidity}</p>
//                 <p className="extra_heading">Humidity</p>
//               </Grid>
//             </>
//           )}

//           {initial_data.pressure === "" ? (
//             ""
//           ) : (
//             <>
//               {" "}
//               <Grid item xs={4}>
//                 <p className="extra_content">{initial_data.pressure}</p>
//                 <p className="extra_heading">Pressure</p>{" "}
//               </Grid>
//             </>
//           )}
//         </Grid>
//       </Grid>
//     </div>
//   );
// }

// export default Weather;
