import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { TruckWhereUniqueInput } from "../truck/TruckWhereUniqueInput";
import { DriverWhereUniqueInput } from "../driver/DriverWhereUniqueInput";
import { RouteWhereUniqueInput } from "../route/RouteWhereUniqueInput";

export type TripWhereInput = {
  id?: StringFilter;
  tripId?: StringNullableFilter;
  departureTime?: DateTimeNullableFilter;
  arrivalTime?: DateTimeNullableFilter;
  truck?: TruckWhereUniqueInput;
  driver?: DriverWhereUniqueInput;
  route?: RouteWhereUniqueInput;
};
