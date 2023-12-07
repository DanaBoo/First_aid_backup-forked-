import React from "react";
import "./HomePage.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
//import AlgorithmChart from "./AlgorithmChart"; // Import the AlgorithmChart component

function AlgorithmPage() {
  return (
    <div className="algorithm-page">
      {/* Header Section */}
      <div className="header">
        <div className="logo">
          <img src="logo.png" alt="Website Logo" />
          <h2>Вбережи Життя</h2>
        </div>
        <div className="menu">
          <ul>
            <li>
              <Link to="/">Головна</Link>
            </li>
            <li>
              <Link to="/lecture">Порядок ДМД</Link>{" "}
            </li>
            <li>
              <Link to="/algorithm">Алгоритм</Link>{" "}
            </li>
            <li>
              <Link to="/resources">Ресурси</Link>
            </li>
            <li>
              <Link to="/contact">Про нас</Link>{" "}
            </li>
          </ul>
        </div>
      </div>

      {/* Welcome Section */}
      <motion.div
        className="algorithm-start"
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

      <div className="bottom-info">
        <p>&copy; {new Date().getFullYear()} Вбережи Життя || Preserve Life</p>
        <p>Created by: Dana_boo (Maliarchuk Bohdana) and Tsymbaliuk Tetiana</p>
        <p>
          <Link to="/">Головна</Link> | <Link to="/contact">Про Нас</Link>
        </p>
      </div>
    </div>
  );
}

export default AlgorithmPage;
