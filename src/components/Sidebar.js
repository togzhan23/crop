import React from "react";
import { Link } from "react-router-dom";
import "../styles/dashboard.css";

function Sidebar(){

return(

<div className="sidebar">

<h2>AgroAI</h2>

<Link to="/">Home</Link>

<Link to="/dashboard">Dashboard</Link>

<Link to="/visualization">Analytics</Link>

</div>

)

}

export default Sidebar