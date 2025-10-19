import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import { Box, Text } from "@chakra-ui/react";
import type { Bike } from "../types/bike";

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;

interface MapViewProps {
  bikes: Bike[];
}

export const MapView: React.FC<MapViewProps> = ({ bikes }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const markers = useRef<Map<number, mapboxgl.Marker>>(new Map());

  useEffect(() => {
    if (map.current) return; // initialize only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current!,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [-111.89, 40.761],
      zoom: 13,
    });
  }, []);

  useEffect(() => {
    if (!map.current) return;

    bikes.forEach((bike) => {
      let marker = markers.current.get(bike.id);
      
      if (!marker) {
        marker = new mapboxgl.Marker()
          .setLngLat([bike.lng, bike.lat])
          .setPopup(
            new mapboxgl.Popup().setHTML(`
              <strong>${bike.name}</strong><br/>
              Battery: ${bike.battery.toFixed(0)}%<br/>
              Status: ${bike.status}
            `)
          )
          .addTo(map.current!);
        markers.current.set(bike.id, marker);
      } else {
        marker.setLngLat([bike.lng, bike.lat]);
        marker.setPopup(
          new mapboxgl.Popup().setHTML(`
            <strong>${bike.name}</strong><br/>
            Battery: ${bike.battery.toFixed(0)}%<br/>
            Status: ${bike.status}
          `)
        );
      }
    });
  }, [bikes]);

  return (
    <Box bg="white" p={6} borderRadius="2xl" shadow="sm">
      <Text fontSize="xl" fontWeight="bold" color="gray.700" mb={4}>
        📍 Live Bike Locations
      </Text>
      <div 
        ref={mapContainer} 
        style={{ 
          width: "100%", 
          height: "600px", 
          borderRadius: "12px",
          overflow: "hidden"
        }} 
      />
    </Box>
  );
};
