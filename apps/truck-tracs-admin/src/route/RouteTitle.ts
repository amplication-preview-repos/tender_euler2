import { Route as TRoute } from "../api/route/Route";

export const ROUTE_TITLE_FIELD = "routeId";

export const RouteTitle = (record: TRoute): string => {
  return record.routeId?.toString() || String(record.id);
};
