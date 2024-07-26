import { TripUpdateManyWithoutTrucksInput } from "./TripUpdateManyWithoutTrucksInput";

export type TruckUpdateInput = {
  model?: string | null;
  licensePlate?: string | null;
  status?: "Option1" | null;
  truckId?: string | null;
  trips?: TripUpdateManyWithoutTrucksInput;
};
