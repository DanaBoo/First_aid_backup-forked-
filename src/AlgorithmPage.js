import React from "react";
import "./AlgorithmPage.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function AlgorithmPage() {
  return (
    <div className="algorithm-page">
      {/* Header Section */}
      <div className="header">
        <div className="logo">
          <img src="logo.png" alt="Website Logo" />
          <h2>Preserve Life</h2>
        </div>
        <div className="menu">
          <ul>
            <li> <Link to="/">Home</Link> </li>
            <li> <Link to="/lecture">Lecture</Link> </li>
            <li> <Link to="/algorithm">Algorithm</Link> </li>
            <li> <Link to="/resources">Resources</Link> </li>
            <li> <Link to="/contact">About Us</Link> </li>
          </ul>
        </div>
      </div>

      {/* Welcome Section */}
      <motion.div
        className="welcome"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Welcome to our website for learning first aid!</h1>
        <p>
          Here, you will find information and tools for studying first aid in
          emergency situations.
        </p>
      </motion.div>

     
     
    </div>
  );
}

export default AlgorithmPage;
