import React from "react";
import "./HomePage.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function ResourcesPage() {
  return (
    <div className="resources-page">
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
        className="resources-start"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Корисні ресурси</h1>
        <p>
          Ласкаво просимо на сторінку &quot;Корисні ресурси&quot; веб-сервісу
          &quot;Вбережи життя&quot;. Тут ви знайдете цінні інформаційні джерела
          та підказки, які допоможуть вам у підготовці до надзвичайних ситуацій
          та наданні домедичної допомоги.
        </p>
      </motion.div>

      <motion.div
        className="resources-actual"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <p>
          <ol>
            <li>
              <b>
                ПОРЯДОК надання домедичної допомоги постраждалим при термічних
                опіках
              </b>{" "}
              <br />
              <br /> <br />
              <a href="https://zakon.rada.gov.ua/laws/show/z0356-22#n644">
                Відкрити
              </a>
              <br />
              <br />
            </li>
            <li>
              <b>Red Cross Ukraine. Перша допомога: серія відеоуроків</b> <br />
              &quot;Red Cross Ukraine&quot; пропонує корисні відеоуроки з першої
              допомоги, що доступні на платформі YouTube у вигляді плейлиста. Ця
              серія відеоматеріалів створена організацією червоного хреста
              України для підготовки та навчання широкого загалу людей основам
              першої медичної допомоги. У цих відеоуроках ви зможете знайти
              практичні поради та інструкції, як надавати допомогу в
              невідкладних ситуаціях, таких як порізи, опіки, переломи, серцевий
              напад та інші медичні невзгоди. Кожен відеоурок пропонує зрозумілі
              пояснення та демонстрації основних методів та прийомів надання
              допомоги, спрямованих на підвищення готовності та компетентності в
              умінні реагувати у випадку надзвичайних ситуацій. <br /> <br />
              <a href="https://www.youtube.com/playlist?list=PLW5j8a52NIcByWxBzeP1Kh_ln8L7WeY3c">
                Відкрити
              </a>
              <br />
              <br />
            </li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ol>
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

export default ResourcesPage;
