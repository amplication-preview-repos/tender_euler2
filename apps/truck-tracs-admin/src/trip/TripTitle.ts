import { Trip as TTrip } from "../api/trip/Trip";

export const TRIP_TITLE_FIELD = "tripId";

export const TripTitle = (record: TTrip): string => {
  return record.tripId?.toString() || String(record.id);
};
