import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import routes from './routes'

const App = () => (
  <div className="App" style={{ background: 'transparent' }}>
    <Routes>
      {routes.map(route => (<Route path={route.path} element={<route.container />} exact={route.exact} />))}
    </Routes>
  </div>
);
export default App;
