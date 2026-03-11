import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{background:"#2e7d32", padding:"15px"}}>
      
      <Link to="/" style={{color:"white", marginRight:"20px"}}>
        Home
      </Link>

      <Link to="/prediction" style={{color:"white", marginRight:"20px"}}>
        Prediction
      </Link>

      <Link to="/visualization" style={{color:"white", marginRight:"20px"}}>
        Visualization
      </Link>

      <Link to="/about" style={{color:"white"}}>
        About
      </Link>

    </nav>
  );
}

export default Navbar;