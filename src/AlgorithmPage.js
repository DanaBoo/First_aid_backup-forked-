import React from "react";
import "./HomePage.css"; // Підключення стилів сторінки
import { motion } from "framer-motion"; // Імпорт бібліотек
import { Link } from "react-router-dom"; // Імпорт бібліотек
import AlgorithmChart from "./AlgorithmChart"; // Імпорт компоненти для відображення діаграми
//import OverviewFlow from "./AlgorithmChart";

function AlgorithmPage() {
  return (
    <div className="algorithm-page">
      {/* Контейнер сторінки */}
      {/* Секція заголовка */}
      <div className="header">
        {/* Заголовок сторінки */}
        <div className="logo">
          {/* Логотип */}
          <img src="logo.png" alt="Website Logo" /> {/* Зображення логотипу */}
          <h2>Вбережи Життя</h2> {/* Текст логотипу */}
        </div>
        <div className="menu">
          {/* Меню */}
          <ul>
            {/* Список пунктів меню */}
            {/* Пункти меню */}
            <li>
              <Link to="/">Головна</Link> {/* Посилання на головну сторінку */}
            </li>
            <li>
              <Link to="/lecture">Порядок ДМД</Link>
              {/* Посилання на сторінку "Порядок ДМД" */}
            </li>
            <li>
              <Link to="/algorithm">Алгоритм</Link>{" "}
              {/* Посилання на сторінку "Алгоритм" */}
            </li>
            <li>
              <Link to="/resources">Ресурси</Link>{" "}
              {/* Посилання на сторінку "Ресурси" */}
            </li>
            <li>
              <Link to="/contact">Про нас</Link>{" "}
              {/* Посилання на сторінку "Про нас" */}
            </li>
          </ul>
        </div>
      </div>
      <motion.div
        className="algorithm-start"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Вітальний текст */}
        <h1>Welcome to our website for learning first aid!</h1>
        {/* Заголовок вітального тексту */}
        <p>
          Here, you will find information and tools for studying first aid in
          emergency situations.
        </p>{" "}
        {/* Текст вітального повідомлення */}
      </motion.div>

      <motion.div
        className="algorithm-chart"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/*<OverviewFlow /> */}
        <AlgorithmChart /> {/* Відображення діаграми */}
      </motion.div>

      {/* <motion.div
        className="algorithm-node-start-end"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <p>Виявлення постраждалого</p>
      </motion.div>

      <div className="algorithm-node-input-output">
        <p>
          Постраждалий з <br />
          термічним опіком
        </p>
      </div>
  */}
      <div className="bottom-info">
        {/* Нижня інформаційна секція */}
        <p>&copy; {new Date().getFullYear()} Вбережи Життя || Preserve Life</p>
        {/* Копірайт */}
        <p>
          Created by: Dana_boo (Maliarchuk Bohdana) and Tsymbaliuk Tetiana
        </p>{" "}
        {/* Інформація про авторів */}
        <p>
          <Link to="/">Головна</Link> | <Link to="/contact">Про Нас</Link>
        </p>
        {/* Навігаційні посилання */}
      </div>
    </div>
  );
}

export default AlgorithmPage;
