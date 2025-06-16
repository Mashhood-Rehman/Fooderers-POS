import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, Auth, Orders } from "./pages/index"
import Headers from "./components/shared/Headers";
const App = () => {
  return (
    <div>
      <Headers />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/Orders" element={<Orders />} />
      </Routes>


    </div>
  );
};

export default App;