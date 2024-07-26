import { SortOrder } from "../../util/SortOrder";

export type TripOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  tripId?: SortOrder;
  departureTime?: SortOrder;
  arrivalTime?: SortOrder;
  truckId?: SortOrder;
  driverId?: SortOrder;
  routeId?: SortOrder;
};
