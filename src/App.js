// in src/App.js
import React from "react";
import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { ExperimentList } from "./experiments";
// import dataProvider from "./dataProvider";

// import simpleRestProvider from "ra-data-simple-rest";
const dataProvider = jsonServerProvider("http://192.168.1.171:8000/api/v1"); //https://jsonplaceholder.typicode.com");

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="experiments" list={ExperimentList} />
  </Admin>
);

export default App;
