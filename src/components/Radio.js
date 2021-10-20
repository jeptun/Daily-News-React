import React, { useEffect, useState } from "react";
import { RadioBrowserApi } from "radio-browser-api";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import defaultImage from "../img/radio.png";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./RadioStyle.css"


export default function Radio() {
  const [stations, setStations] = useState();
  const [stationFilter, setStationFilter] = useState("all");

  
  useEffect(() => {
    setupApi(stationFilter).then((data) => {
      setStations(data);
    });
  }, [stationFilter]);

  //Fetch Data
  const setupApi = async (stationFilter) => {
    const api = new RadioBrowserApi(fetch.bind(window), "My Radio App");

    //Promisa
    const stations = await api
      .searchStations({
        language: "czech",
        tag: stationFilter,
        limit: 3,
      })
      .then((data) => {
        return data;
      });

    return stations;
  };

  //Žánry rádia!
  const filters = [
    "news",
    "classical",
    "country",
    "dance",
    "disco",
    "jazz",
    "pop",
    "rock",
  ];

  //Alternatní img pro radio co nemá vlasní img!
  const setDefaultSrc = (event) => {
    event.target.src = defaultImage;
  };

//Komponenta použita v Sidebar.js
  return (
    <div>
      <Card  sx={{ display: "block" , m:2}}>
      <Typography variant="h6" gutterBottom sx={{ m:2}} >📻Radio</Typography>
      <Typography variant="body2" gutterBottom  sx={{color: 'primary.main',m:2}}>
      Pro zobrazení přehrávače klikni na žánr.
        </Typography> 
        {stations &&
          stations.map((station, index) => {
            return (             
              <CardContent key={index} >

              {/*Css img RadioStyle.css */}
                <img 
                  src={station.favicon}
                  alt="station logo"
                  onError={setDefaultSrc}
                />
                <Typography  variant="h6">{station.name}</Typography>
                <AudioPlayer
                  src={station.urlResolved}
                  showJumpControls={false}
                  layout="stacked"
                  customProgressBarSection={[]}
                  customControlsSection={["MAIN_CONTROLS", "VOLUME_CONTROLS"]}
                  autoPlayAfterSrcChange={false}
                />
              </CardContent>
            );
          })}
        {filters.map((filter, index) => (
          <Box key={index}>
            <Stack key={filter} spacing={2} sx={{ mx: 2, my: 1 }}>
              <Button
                variant="contained"
                size="small"
                key={index}
                onClick={() => setStationFilter(filter)}
              >
                {" "}
                {filter}
              </Button>
            </Stack>
          </Box>
        ))}
      </Card>
    </div>
  );
}
