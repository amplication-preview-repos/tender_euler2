import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { TripListRelationFilter } from "../trip/TripListRelationFilter";

export type RouteWhereInput = {
  id?: StringFilter;
  routeId?: StringNullableFilter;
  startLocation?: StringNullableFilter;
  endLocation?: StringNullableFilter;
  distance?: FloatNullableFilter;
  trips?: TripListRelationFilter;
};
