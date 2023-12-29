"use client";

import { MapContainer, Marker, TileLayer } from "react-leaflet";
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css';
import "leaflet/dist/leaflet.css";
import 'leaflet-defaulticon-compatibility';

export default function Map() {
  return (
    <MapContainer center={[51.505, -0.09]} zoom={4} className="h-[50vh] w-[50vw] bg-no-repeat rounded-md">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]}></Marker>
    </MapContainer>
  );
}
