import React from "react";
import Sidebar from "./Sidebar";
import "../styles/dashboard.css";

function Layout({ children }) {
  return (
    <div className="dashboard">

      <Sidebar />

      <div className="main">
        {children}
      </div>

    </div>
  );
}

export default Layout;