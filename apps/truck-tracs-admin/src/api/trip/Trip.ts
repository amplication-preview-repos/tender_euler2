import { Truck } from "../truck/Truck";
import { Driver } from "../driver/Driver";
import { Route } from "../route/Route";

export type Trip = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  tripId: string | null;
  departureTime: Date | null;
  arrivalTime: Date | null;
  truck?: Truck | null;
  driver?: Driver | null;
  route?: Route | null;
};
