import React, { useState } from "react";
import NDVIChart from "../components/NDVIChart";

function Prediction() {

  const [crop, setCrop] = useState("Wheat");
  const [result, setResult] = useState(null);

  const predictYield = () => {

    const value = (Math.random() * 5).toFixed(2);
    setResult(value);

  };

  return (
    <div style={{padding:"40px"}}>

      <h1>Yield Prediction</h1>

      <label>Select Crop: </label>

      <select
        value={crop}
        onChange={(e)=>setCrop(e.target.value)}
      >
        <option>Wheat</option>
        <option>Corn</option>
        <option>Barley</option>
        <option>Sunflower</option>
      </select>

      <button
        onClick={predictYield}
        style={{marginLeft:"20px"}}
      >
        Predict
      </button>

      <br/><br/>

      <NDVIChart />

      {result && (
        <h2>
          Predicted Yield: {result} tons/hectare
        </h2>
      )}

    </div>
  );
}

export default Prediction;