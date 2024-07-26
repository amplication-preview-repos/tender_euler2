import { Truck as TTruck } from "../api/truck/Truck";

export const TRUCK_TITLE_FIELD = "model";

export const TruckTitle = (record: TTruck): string => {
  return record.model?.toString() || String(record.id);
};
