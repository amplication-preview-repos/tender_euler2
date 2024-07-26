import { SortOrder } from "../../util/SortOrder";

export type TruckOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  model?: SortOrder;
  licensePlate?: SortOrder;
  status?: SortOrder;
  truckId?: SortOrder;
};
