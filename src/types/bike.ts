export type Bike = {
  id: number;
  name: string;
  lat: number;
  lng: number;
  battery: number;
  status: "available" | "in-use" | "low-battery";
};
