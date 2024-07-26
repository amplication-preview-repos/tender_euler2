import { TripCreateNestedManyWithoutDriversInput } from "./TripCreateNestedManyWithoutDriversInput";

export type DriverCreateInput = {
  driverId?: string | null;
  name?: string | null;
  licenseNumber?: string | null;
  phoneNumber?: string | null;
  trips?: TripCreateNestedManyWithoutDriversInput;
};
