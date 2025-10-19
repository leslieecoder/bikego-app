import type { Bike } from "../types/bike";

export function generateBikeData(): Bike[] {
  return [
    {
      id: 1,
      name: "Bike 1",
      battery: 85,
      lat: 40.761,
      lng: -111.89,
      status: "available",
    },
    {
      id: 2,
      name: "Bike 2",
      battery: 65,
      lat: 40.765,
      lng: -111.88,
      status: "in-use",
    },
    {
      id: 3,
      name: "Bike 3",
      battery: 20,
      lat: 40.758,
      lng: -111.895,
      status: "low-battery",
    },
  ];
}
