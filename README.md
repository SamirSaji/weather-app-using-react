## Weather App using ReactJs and Google Map API

I created this project by using :

- ReactJS
- Material UI (Designing Project)
- Axios (Fetch data from the API)
- Google API (Autocomplete Search Location)
- OpenWeather (To get Weather Reports)

Put Our Google API Credential Key in head tag of Index.html page Following this:

```
<script
    src="https://maps.googleapis.com/maps/api/js?key={YOUR_GOOGLE_API_KEY}&libraries=places"></script>
```

Then Add OpenWeather API Credential Key in App.js File Following this:

```
https://api.openweathermap.org/data/2.5/weather?lat=${initial_location.lat}&lon=${initial_location.lng}&appid={YOUR_OPENWEATHER_API_KEY}
```

---

**NOTE**

Please Delete ProjectTrailer.gif in assets file.

---

Install npm packages and run file to find weather of your seached location.

![Alt Text](https://raw.githubusercontent.com/SamirSaji/weather-app-using-react/main/src/assets/projectTrailer.gif)
