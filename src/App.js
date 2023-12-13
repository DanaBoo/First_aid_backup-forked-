import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage"; // Імпорт компоненти головної сторінки
import LecturePage from "./LecturePage"; // Імпорт компоненти сторінки порядку ДМД
import AlgorithmPage from "./AlgorithmPage"; // Імпорт компоненти сторінки алгоритму
import ResourcesPage from "./ResourcesPage"; // Імпорт компоненти сторінки ресурсів
import ContactPage from "./ContactPage"; // Імпорт компоненти сторінки контактів

// Функція App - головний компонент програми
function App() {
  return (
    <Router>
      <Routes>
        {/* Маршрутизація до різних сторінок */}
        <Route path="/" element={<HomePage />} />{" "}
        {/* Маршрут до головної сторінки */}
        <Route path="/lecture" element={<LecturePage />} />{" "}
        {/* Маршрут до сторінки порядку ДМД */}
        <Route path="/algorithm" element={<AlgorithmPage />} />{" "}
        {/* Маршрут до сторінки алгоритму */}
        <Route path="/resources" element={<ResourcesPage />} />{" "}
        {/* Маршрут до сторінки ресурсів */}
        <Route path="/contact" element={<ContactPage />} />{" "}
        {/* Маршрут до сторінки контактів */}
      </Routes>
    </Router>
  );
}

export default App;
