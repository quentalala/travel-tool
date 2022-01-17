import React from "react";

const PlaceDetails = ({ place }) => {
  console.log(place);
  return (
    <div>
      <div>{place.name}</div>
    </div>
  );
};

export default PlaceDetails;
