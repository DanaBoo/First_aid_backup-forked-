import React from "react";
import "./HomePage.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function LecturePage() {
  return (
    <div className="lecture-page">
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
        className="lecture-start"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <p style={{ textAlign: "left", fontSize: "14px" }}>
          <b>
            ЗАТВЕРДЖЕНО
            <br /> Наказ Міністерства
            <br /> охорони здоров’я України
            <br /> 09 березня 2022 року № 441
          </b>
        </p>
        <p>
          <b> </b>
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

export default LecturePage;
