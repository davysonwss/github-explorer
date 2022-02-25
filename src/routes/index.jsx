import { Routes, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard/";
import User from "../pages/User/";
import Repository from "../pages/Repository/";

function RoutesFc() {
  return (
    <Routes>
      <Route path="/" exact element={<Dashboard />} />
      <Route path="/user/:username" element={<User />} />
      <Route path="/user/:username/:repository" element={<Repository />} />
    </Routes>
  );
}

export default RoutesFc;
