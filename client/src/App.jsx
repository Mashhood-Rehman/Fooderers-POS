import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, Auth, Orders } from "./pages/index"
import Headers from "./components/shared/Headers";
import Tables from "./pages/Tables";
import Menu from "./pages/Menu";
const App = () => {
  return (
    <div>
      <Headers />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/Orders" element={<Orders />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/Tables" element={<Tables />} />
      </Routes>


    </div>
  );
};

export default App;