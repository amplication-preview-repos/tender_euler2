import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { TripTitle } from "../trip/TripTitle";

export const DriverCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Driver ID" source="driverId" />
        <TextInput label="Name" source="name" />
        <TextInput label="License Number" source="licenseNumber" />
        <TextInput label="Phone Number" source="phoneNumber" />
        <ReferenceArrayInput
          source="trips"
          reference="Trip"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TripTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
