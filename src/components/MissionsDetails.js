import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./styles.css";
import Commented from "./Commented";
import { useNavigate } from "react-router-dom";
function MissionsDetails() {
  const { missionId } = useParams();
  const [mission, setMission] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://api.spacexdata.com/v3/launches/${missionId}`)
      .then((response) => {
        setMission(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [missionId]);
  console.log("sss", mission);
  return (
    <div className="rocket_details">
      {loading ? (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      ) : (
        <div className="details">
          <h3>{mission.mission_name}</h3>
          <p>
            <span className="red">Rocket Details:</span> {mission.details}
          </p>
          <p>
            <span className="red">Rocket Name: </span>
            {mission?.rocket?.rocket_name}
          </p>
          <p>
            <span className="red">Rocket Launch Date Local:</span>{" "}
            {mission.launch_date_local}
          </p>
          <img
            src={mission?.links?.mission_patch_small}
            alt={mission.mission_name}
          />
        </div>
      )}
      <div>
        <Commented />
      </div>
      <div>
        <button className="btn" onClick={() => navigate("/")}>
          Go to Contact
        </button>
      </div>
    </div>
  );
}

export default MissionsDetails;
