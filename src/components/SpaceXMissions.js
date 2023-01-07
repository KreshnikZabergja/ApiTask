import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  BrowserRouter,
  Route,
  Routes,
  Link,
  useParams,
} from "react-router-dom";
import Mission from "./Mission";
import "./styles.css";
function SpaceXMissions() {
  const [missions, setMissions] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get("https://api.spacexdata.com/v3/launches")
      .then((response) => {
        setMissions(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container">
      {loading ? (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      ) : (
        <div className="grid">
          {missions.map((mission) => (
            <Link
              to={`/mission/${mission.flight_number}`}
              style={{ textDecoration: "none" }}
            >
              <Mission key={mission.flight_number} mission={mission} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default SpaceXMissions;
