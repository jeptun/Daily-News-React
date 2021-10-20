import React, { useState } from "react";
import Input from "@mui/material/Input";
import Typography from "@mui/material/Typography";

const api = {
  key: "4297748c87266b32c1a45b27ecdd2989",
  base: "https://api.openweathermap.org/data/2.5/",
};

function Weather() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  //Data Fetch Weather Api
  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
          console.log(result);
        });
    }
  };

  //Datum
  const dateBuilder = (d) => {
    let months = [
      "Leden",
      "Únor",
      "Březen",
      "Duben",
      "Květen",
      "Červen",
      "Červenec",
      "Srpen",
      "Září",
      "Říjen",
      "Listopad",
      "Prosinec",
    ];
    let days = [
      "Neděle",
      "Pondělí",
      "Uterý",
      "Středa",
      "Čtvrtek",
      "Pátek",
      "Sobota",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  //Hodiny
  const timeBuilder = () => {
    let today = new Date();
    let time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    return `${time}`;
  };

  //Komponenta použita v Sidebar.js
  return (
    <div>
      <Input
        label="Zadej město"
        color="primary"
        placeholder="Zadej město"
        type="text"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        onKeyPress={search}
      />
      {typeof weather.main != "undefined" ? (
        <>
          <Typography variant="h6" gutterBottom>
            {weather.name}, {weather.sys.country}
          </Typography>
          <Typography variant="body1">Den: {dateBuilder(new Date())}</Typography>
          <Typography variant="body1">Čas: {timeBuilder()}</Typography>
          <Typography variant="body1">Teplota: {Math.round(weather.main.temp)}°c
          </Typography>
          <Typography variant="body1">Aktuálně : {weather.weather[0].main}</Typography>
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default Weather;
