import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const DriverList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Drivers"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Driver ID" source="driverId" />
        <TextField label="Name" source="name" />
        <TextField label="License Number" source="licenseNumber" />
        <TextField label="Phone Number" source="phoneNumber" />
      </Datagrid>
    </List>
  );
};
