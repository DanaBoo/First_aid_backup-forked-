import React from "react";
import "./HomePage.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="home-page">
      {/* Header Section */}
      <div className="header">
        <div className="logo">
          <img src='logo.png' alt="Website Logo" />
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

      {/* Project Info Section */}
      <motion.div
        className="project-info"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2>About the Project</h2>
        <p>
          This project aims to provide essential knowledge about first aid,
          helping you be prepared to assist in emergencies. We offer lectures,
          interactive algorithms, and valuable resources to empower you with
          life-saving skills.
        </p>
      </motion.div>

      {/* Additional Content Section */}
      <div className="additional-content">
        <h2>Learn First Aid Online</h2>
        <p>
          Our online platform provides a wide range of resources to help you
          learn first aid. From video lectures to interactive quizzes, we`ve got
          you covered.
        </p>
      </div>

      {/* More Content Section */}
      <div className="more-content">
        <h2>Join Our Community</h2>
        <p>
          Connect with like-minded individuals who are passionate about first
          aid. Share your experiences and knowledge to make a difference.
        </p>
      </div>
    </div>
  );
}

export default HomePage;
