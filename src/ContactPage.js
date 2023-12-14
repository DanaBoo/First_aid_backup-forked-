import React from "react";
import "./HomePage.css"; // Імпорт файлу стилів
import { motion } from "framer-motion"; // Імпорт бібліотеки framer-motion
import { Link } from "react-router-dom"; // Імпорт компонента Link для маршрутизації

function ContactPage() {
  return (
    <div className="contact-page">
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

      {/* Секція вітання */}
      <motion.div
        className="about-us-start"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Про нас</h1>
        <p>
          Веб-сервіс &quot;Вбережи життя&quot; було створено студенткою
          Волинського національного університету імені Лесі Українки, Факультету
          інформаційних технологій та математики групи КНІТ-34, Малярчук
          Богданою. Цей ресурс виник завдяки спільній роботі та підтримці від
          Цимбалюк Тетяни, викладача Дубенського педагогічного фахового коледжу
          Рівненського державного гуманітарного університету. Спільні зусилля
          цих осіб спрямовані на знаходження та систематизацію корисних
          матеріалів для покращення доступу до інформації щодо безпеки та
          надання допомоги у непередбачуваних ситуаціях.{" "}
        </p>
      </motion.div>

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

export default ContactPage;
