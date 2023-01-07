import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MissionsDetails from "./components/MissionsDetails";
import SpaceXMissions from "./components/SpaceXMissions";
import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
  return (
    <BrowserRouter>
      {loading ? (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      ) : (
        <Routes>
          <Route exact path="/" element={<SpaceXMissions />} />
          <Route path="/mission/:missionId" element={<MissionsDetails />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}
export default App;
