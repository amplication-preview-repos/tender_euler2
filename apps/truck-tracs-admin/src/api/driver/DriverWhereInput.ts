import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TripListRelationFilter } from "../trip/TripListRelationFilter";

export type DriverWhereInput = {
  id?: StringFilter;
  driverId?: StringNullableFilter;
  name?: StringNullableFilter;
  licenseNumber?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
  trips?: TripListRelationFilter;
};
