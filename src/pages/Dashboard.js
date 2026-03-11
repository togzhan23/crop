import React, { useState } from "react";
import MapKazakhstan from "../components/MapKazakhstan";
import NDVIChart from "../components/NDVIChart";
import "../styles/dashboard.css";

function Dashboard(){

const [crop,setCrop]=useState("Wheat")
const [prediction,setPrediction]=useState(null)

const runPrediction=()=>{
const value=(Math.random()*5).toFixed(2)
setPrediction(value)
}

return(

<div>

<h1>Crop Yield Prediction Dashboard</h1>

<div className="card">

<h3>Region Map</h3>

<MapKazakhstan/>

</div>

<div className="card">

<h3>Prediction Panel</h3>

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
onClick={runPrediction}
style={{marginLeft:"15px"}}
>

Run Prediction

</button>

{prediction && (

<div className="prediction">

Predicted Yield: {prediction} tons/hectare

</div>

)}

</div>

<div className="card">

<h3>NDVI Dynamics</h3>

<NDVIChart/>

</div>

</div>

)

}

export default Dashboard