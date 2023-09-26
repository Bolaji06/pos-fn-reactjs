import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import ViewUsers from "./containers/users/viewUsers";
import HomeContainer from './containers/home/home'
import ViewProjects from "./containers/projects/viewProjects";

const App = () => (
  <div className="App">
    <Routes>
      <Route path="/home" element={<HomeContainer />} />
      <Route path="/users" element={<ViewUsers />} />
      <Route path="/projects" element={<ViewProjects />} />
    </Routes>
  </div>
);
export default App;