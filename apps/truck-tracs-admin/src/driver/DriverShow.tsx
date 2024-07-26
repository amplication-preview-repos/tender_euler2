import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { TRUCK_TITLE_FIELD } from "../truck/TruckTitle";
import { DRIVER_TITLE_FIELD } from "./DriverTitle";
import { ROUTE_TITLE_FIELD } from "../route/RouteTitle";

export const DriverShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Driver ID" source="driverId" />
        <TextField label="Name" source="name" />
        <TextField label="License Number" source="licenseNumber" />
        <TextField label="Phone Number" source="phoneNumber" />
        <ReferenceManyField reference="Trip" target="driverId" label="Trips">
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
            <ReferenceField
              label="Driver"
              source="driver.id"
              reference="Driver"
            >
              <TextField source={DRIVER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Route" source="route.id" reference="Route">
              <TextField source={ROUTE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
