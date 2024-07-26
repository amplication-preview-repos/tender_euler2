import { TripUpdateManyWithoutRoutesInput } from "./TripUpdateManyWithoutRoutesInput";

export type RouteUpdateInput = {
  routeId?: string | null;
  startLocation?: string | null;
  endLocation?: string | null;
  distance?: number | null;
  trips?: TripUpdateManyWithoutRoutesInput;
};
