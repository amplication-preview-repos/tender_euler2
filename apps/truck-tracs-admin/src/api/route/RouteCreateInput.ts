import { TripCreateNestedManyWithoutRoutesInput } from "./TripCreateNestedManyWithoutRoutesInput";

export type RouteCreateInput = {
  routeId?: string | null;
  startLocation?: string | null;
  endLocation?: string | null;
  distance?: number | null;
  trips?: TripCreateNestedManyWithoutRoutesInput;
};
