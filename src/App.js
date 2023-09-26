import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import ViewUsers from "./containers/users/viewUsers";

const App = () => (
  <div className="App">
    <Routes>
      <Route path="/" element={<ViewUsers />} />
    </Routes>
  </div>
);
export default App;