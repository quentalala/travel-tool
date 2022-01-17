import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
// Paper is a div with a background colour
// useMediaQuery helps with mobile responsiveness
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Rating from "@material-ui/lab";

import useStyles from "./styles";

const Map = ({ setCoordinates, setBoundaries, coordinates }) => {
  const classes = useStyles();
  const isMobile = useMediaQuery("(min-width:600px)");
  // isMobile variable is set to false if width of viewport larger than 600px

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_MAPS_API_KEY }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={(event) => {
          setCoordinates({ lat: event.center.lat, lng: event.center.lng });
          setBoundaries({
            ne: event.marginBounds.ne,
            sw: event.marginBounds.sw,
          });
        }}
        onChildClick={""}
        // Used when you click on the map
      ></GoogleMapReact>
    </div>
  );
};

export default Map;
