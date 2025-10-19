import { useEffect, useState } from "react";
import { generateBikeData } from "../utils/generateBikeData";
import type { Bike } from "../types/bike";


export const useBikeData = () => {
  const [bikes, setBikes] = useState<Bike[]>(generateBikeData());

  useEffect(() => {
    const interval = setInterval(() => {
      setBikes((prev) =>
        prev.map((bike) => ({
          ...bike,
          lat: bike.lat + (Math.random() - 0.5) * 0.001,
          lng: bike.lng + (Math.random() - 0.5) * 0.001,
          battery: Math.max(0, bike.battery - Math.random() * 2),
        }))
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return bikes;
};
