"use client";

import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import MapRouting from "./LeafletRoutingMachine";

type Place = {
  id: string;
  name: string;
  slug: string;
  location: {
    latitude: number;
    longitude: number;
  };
};

export type MapProps = {
  places?: Place[];
};

export default function Map() {
  return (
    <MapContainer
      center={[-9.974, -67.8076]}
      zoom={13}
      zoomAnimation={true}
      zoomControl={true}
      className="h-[80vh] w-[90vw] bg-no-repeat rounded-md"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MapRouting />
    </MapContainer>
  );
}
