import React, { useState, useEffect } from "react";
import { CssBaseline, Grid } from "@material-ui/core";

import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";

import { getPlacesData } from "./api";

const App = () => {
  const [places, setPlaces] = useState([
    {
      name: "test1",
      photo: '"https://en.wikipedia.org/wiki/File:Krusty_Krab_230b.png"',
    },
    { name: "test2" },
    { name: "test3" },
    { name: "test4" },
    { name: "test5" },
    { name: "test6" },
    { name: "test7" },
    { name: "test8" },
  ]);
  const [coordinates, setCoordinates] = useState({});
  const [boundaries, setBoundaries] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  // useEffect(() => {
  //   console.log(coordinates, boundaries);
  //   getPlacesData().then((data) => {
  //     console.log(data);
  //     setPlaces(data);
  //   });
  // }, [coordinates, boundaries]);

  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List places={places} />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            setCoordinates={setCoordinates}
            setBoundaries={setBoundaries}
            coordinates={coordinates}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
