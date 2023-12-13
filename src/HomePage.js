import React from "react";
import "./HomePage.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="home-page">
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

      <div className="home-image-section">
        <img src="background2.png" alt="Background" />
      </div>

      <motion.div
        className="home-welcome"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>
          <p>Ласкаво просимо на веб-платформу </p>
          &quot;Вбережи життя&quot;!
        </h1>
      </motion.div>

      <motion.div
        className="home-beginning"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <ul>
          <li>Трапилася біда, життя людини в небезпеці.</li>
          <li>Хто їй допоможе? Тільки той, хто виявиться поруч.</li>
          <li>За допомогою чого? Використовуючи підручні засоби.</li>
          <li>
            Скільки часу відводиться на порятунок постраждалого? 5-7 хвилин.
          </li>
          <li>
            Із чим може стикнутися рятувальник? Вражаючим фактором, кров’ю,
            брудом.
          </li>
          <li>Як повинен діяти рятувальник?</li>
        </ul>
      </motion.div>

      <motion.div
        className="home-first-aid-info"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2>Значення знань першої медичної допомоги</h2>
        <p>
          Скільки життів можна врятувати, знаючи правила та послідовність
          домедичної допомоги! Цією людиною можете бути Ви! Наша місія полягає у
          тому, щоб, враховуючи всі обставини, Ви обрали найбільш оптимальний
          шлях порятунку потерпілого. Надаючи допомогу, ми не можемо
          користуватися однією схемою, бо ситуації бувають різні. Мова йде про
          здоров&apos;я, а тут найдрібніша помилка обходиться занадто дорого.
        </p>
      </motion.div>

      <motion.div
        className="home-information-and-recommendation"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2>Інформація та рекомендації</h2>
        <p>
          На цьому сайті ви знайдете вичерпну інформацію, корисні поради та
          практичні рекомендації, які допоможуть вам в надзвичайних обставинах.
          Можуть бути ситуації, коли потрібно мобілізувати волю. Та може
          трапитися так, що саме від Вашої допомоги залежатиме здоров’я, а то й
          життя людини. І Ви не повинні розгубитись. Треба бути готовим
          кваліфіковано і швидко допомогти потерпілому до приїзду бригади
          екстреної медичної допомоги.
        </p>
      </motion.div>

      <motion.div
        className="home-importance-of-learning"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2>Важливість навчання</h2>
        <p>
          Домедичну допомогу нерідко доводиться надавати за складних і
          несприятливих обставин. Отож опрацьовуємо матеріал серйозно та
          відповідально. І нехай здобуті знання ніколи не стануть необхідними
          навичками в житті! А якщо все таки настане необхідність скористатися
          ними, то проявіть міцність характеру та силу волі у врятуванні життя
          людини.
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

export default HomePage;
