import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { TripTitle } from "../trip/TripTitle";

export const RouteEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Route ID" source="routeId" />
        <TextInput label="Start Location" source="startLocation" />
        <TextInput label="End Location" source="endLocation" />
        <NumberInput label="Distance" source="distance" />
        <ReferenceArrayInput
          source="trips"
          reference="Trip"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TripTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
