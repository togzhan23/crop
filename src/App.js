import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";

import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Visualization from "./pages/Visualization";

function App() {

  return (
    <Router>

      <Layout>

        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/visualization" element={<Visualization />} />

        </Routes>

      </Layout>

    </Router>
  );
}

export default App;