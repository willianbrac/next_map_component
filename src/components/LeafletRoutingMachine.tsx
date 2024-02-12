"use client";

import { useMap } from "react-leaflet";
import { useEffect } from "react";
import * as L from "leaflet";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";

export default function MapRouting() {
  const map = useMap();

  useEffect(() => {
    L.Routing.control({
      waypoints: [],
      lineOptions: {
        styles: [{ color: "red" }],
        extendToWaypoints: true,
        missingRouteTolerance: 5,
      },
      routeWhileDragging: false,
      geocoder: (L as any).Control.Geocoder.nominatim(),
    }).addTo(map);
  }, [map]);
  return null;
}
