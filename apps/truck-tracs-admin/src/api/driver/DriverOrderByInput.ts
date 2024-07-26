import { SortOrder } from "../../util/SortOrder";

export type DriverOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  driverId?: SortOrder;
  name?: SortOrder;
  licenseNumber?: SortOrder;
  phoneNumber?: SortOrder;
};
