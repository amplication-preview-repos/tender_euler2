import { TruckWhereUniqueInput } from "../truck/TruckWhereUniqueInput";
import { DriverWhereUniqueInput } from "../driver/DriverWhereUniqueInput";
import { RouteWhereUniqueInput } from "../route/RouteWhereUniqueInput";

export type TripUpdateInput = {
  tripId?: string | null;
  departureTime?: Date | null;
  arrivalTime?: Date | null;
  truck?: TruckWhereUniqueInput | null;
  driver?: DriverWhereUniqueInput | null;
  route?: RouteWhereUniqueInput | null;
};
