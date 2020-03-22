import React from "react";
import { List, Datagrid, TextField } from "react-admin";

export const ExperimentList = props => (
  <List {...props}>
    <Datagrid>
      <TextField source="experiment_uuid" />
      <TextField source="ts" />
      <TextField source="action" />
      <TextField source="vision_sensor" />
      <TextField source="speed" />
      <TextField source="state" />
    </Datagrid>
  </List>
);
