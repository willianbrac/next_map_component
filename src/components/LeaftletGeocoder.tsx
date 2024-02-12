"use client";

import { useMap } from "react-leaflet";
import { useEffect } from "react";

import * as L from "leaflet";
import Geocoder from "leaflet-control-geocoder";

export default function MapGeocoder() {
  const map = useMap();
  const GeocoderControl = new Geocoder();
  GeocoderControl.addTo(map);

  useEffect(() => {
    GeocoderControl.on("markgeocode", function (e) {
      const lat_lng = e.geocode.center;
      L.marker(lat_lng).addTo(map).bindPopup(e.geocode.name).openPopup();
      map.fitBounds(e.geocode.bbox);
    });
  }, []);
  return null;
}
