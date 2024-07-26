import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TripListRelationFilter } from "../trip/TripListRelationFilter";

export type TruckWhereInput = {
  id?: StringFilter;
  model?: StringNullableFilter;
  licensePlate?: StringNullableFilter;
  status?: "Option1";
  truckId?: StringNullableFilter;
  trips?: TripListRelationFilter;
};
