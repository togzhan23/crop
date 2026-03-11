import React from "react";
import NDVIChart from "../components/NDVIChart";

function Visualization() {

  return (
    <div style={{padding:"40px"}}>

      <h1>Data Visualization</h1>

      <p>
        Visualization of NDVI dynamics based on satellite remote sensing data.
      </p>

      <NDVIChart />

    </div>
  );
}

export default Visualization;