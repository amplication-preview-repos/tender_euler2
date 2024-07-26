import { Trip } from "../trip/Trip";

export type Route = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  routeId: string | null;
  startLocation: string | null;
  endLocation: string | null;
  distance: number | null;
  trips?: Array<Trip>;
};
