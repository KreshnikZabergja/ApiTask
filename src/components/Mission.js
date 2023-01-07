import React from "react";
import "./styles.css";
function Mission(props) {
  const { mission } = props;
  return (
    <div className="item-container">
      <div className="rockets">
        <h3>{mission.mission_name}</h3>
        <p>{mission.launch_date_local}</p>
        <img
          className="image"
          src={mission.links.mission_patch_small}
          alt={mission.mission_name}
        />
      </div>
    </div>
  );
}

export default Mission;
