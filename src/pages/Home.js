import React from "react";
import { useNavigate } from "react-router-dom";
import NDVIChart from "../components/NDVIChart";
import MapKazakhstan from "../components/MapKazakhstan";
import "../styles/home.css";

function Home(){

const navigate = useNavigate()

return(

<div>

{/* HERO */}

<div className="hero">

<div className="hero-left">

<h1>AI-Based Crop Yield Prediction</h1>

<p>
Decision support system for precision agriculture using
remote sensing data, vegetation indices and machine learning models.
</p>

<button onClick={()=>navigate("/dashboard")}>
Open Dashboard
</button>

</div>

<div className="hero-right">

<NDVIChart/>

</div>

</div>


{/* RELEVANCE */}

<div className="section">

<h2>Why Crop Yield Prediction Matters</h2>

<p>

Accurate crop yield prediction is essential for agricultural planning,
food security and risk management. Climate variability and limited
agricultural resources increase the need for intelligent data-driven
solutions in modern agriculture.

</p>

</div>


{/* ABOUT */}

<div className="section">

<h2>About the System</h2>

<p>

This platform predicts crop yield using satellite remote sensing data and
machine learning techniques. Vegetation indices derived from multispectral
imagery allow monitoring crop health and growth dynamics during the
vegetation season.

</p>

</div>


{/* FEATURES */}

<div className="section">

<h2>System Features</h2>

<div className="cards">

<div className="card-item">
<h3>Satellite Data</h3>
<p>Remote sensing imagery used for crop monitoring.</p>
</div>

<div className="card-item">
<h3>NDVI Analysis</h3>
<p>Vegetation indices used to evaluate crop health.</p>
</div>

<div className="card-item">
<h3>Machine Learning</h3>
<p>Predictive models for estimating crop yield.</p>
</div>

<div className="card-item">
<h3>Yield Prediction</h3>
<p>Decision support system for agricultural planning.</p>
</div>

</div>

</div>


{/* PIPELINE */}

<div className="section">

<h2>How the System Works</h2>

<div className="pipeline">

Satellite Data → NDVI Extraction → Feature Processing → Machine Learning → Yield Prediction

</div>

</div>


{/* DASHBOARD PREVIEW */}

<div className="section">

<h2>System Interface Preview</h2>

<div className="preview">

<MapKazakhstan/>

</div>

</div>

</div>

)

}

export default Home