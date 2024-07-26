import { TripUpdateManyWithoutDriversInput } from "./TripUpdateManyWithoutDriversInput";

export type DriverUpdateInput = {
  driverId?: string | null;
  name?: string | null;
  licenseNumber?: string | null;
  phoneNumber?: string | null;
  trips?: TripUpdateManyWithoutDriversInput;
};
