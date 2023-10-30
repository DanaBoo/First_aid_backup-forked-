import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import LecturePage from "./LecturePage";
import AlgorithmPage from "./AlgorithmPage";
import ResourcesPage from "./ResourcesPage";
import ContactPage from "./ContactPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/lecture" element={<LecturePage />} />
        <Route path="/algorithm" element={<AlgorithmPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
