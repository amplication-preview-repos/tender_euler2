import { SortOrder } from "../../util/SortOrder";

export type RouteOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  routeId?: SortOrder;
  startLocation?: SortOrder;
  endLocation?: SortOrder;
  distance?: SortOrder;
};
