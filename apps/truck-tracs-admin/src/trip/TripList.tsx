import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { TRUCK_TITLE_FIELD } from "../truck/TruckTitle";
import { DRIVER_TITLE_FIELD } from "../driver/DriverTitle";
import { ROUTE_TITLE_FIELD } from "../route/RouteTitle";

export const TripList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Trips"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Trip ID" source="tripId" />
        <TextField label="Departure Time" source="departureTime" />
        <TextField label="Arrival Time" source="arrivalTime" />
        <ReferenceField label="Truck" source="truck.id" reference="Truck">
          <TextField source={TRUCK_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Driver" source="driver.id" reference="Driver">
          <TextField source={DRIVER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Route" source="route.id" reference="Route">
          <TextField source={ROUTE_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
