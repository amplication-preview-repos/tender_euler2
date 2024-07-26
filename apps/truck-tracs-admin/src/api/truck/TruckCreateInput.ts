import { TripCreateNestedManyWithoutTrucksInput } from "./TripCreateNestedManyWithoutTrucksInput";

export type TruckCreateInput = {
  model?: string | null;
  licensePlate?: string | null;
  status?: "Option1" | null;
  truckId?: string | null;
  trips?: TripCreateNestedManyWithoutTrucksInput;
};
