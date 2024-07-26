import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { TruckTitle } from "../truck/TruckTitle";
import { DriverTitle } from "../driver/DriverTitle";
import { RouteTitle } from "../route/RouteTitle";

export const TripEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Trip ID" source="tripId" />
        <DateTimeInput label="Departure Time" source="departureTime" />
        <DateTimeInput label="Arrival Time" source="arrivalTime" />
        <ReferenceInput source="truck.id" reference="Truck" label="Truck">
          <SelectInput optionText={TruckTitle} />
        </ReferenceInput>
        <ReferenceInput source="driver.id" reference="Driver" label="Driver">
          <SelectInput optionText={DriverTitle} />
        </ReferenceInput>
        <ReferenceInput source="route.id" reference="Route" label="Route">
          <SelectInput optionText={RouteTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
