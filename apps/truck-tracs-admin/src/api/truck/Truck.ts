import { Trip } from "../trip/Trip";

export type Truck = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  model: string | null;
  licensePlate: string | null;
  status?: "Option1" | null;
  truckId: string | null;
  trips?: Array<Trip>;
};
