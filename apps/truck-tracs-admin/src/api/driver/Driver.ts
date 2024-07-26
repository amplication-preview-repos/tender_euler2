import { Trip } from "../trip/Trip";

export type Driver = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  driverId: string | null;
  name: string | null;
  licenseNumber: string | null;
  phoneNumber: string | null;
  trips?: Array<Trip>;
};
