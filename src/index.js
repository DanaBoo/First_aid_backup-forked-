// Імпорт бібліотек та компонента
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

// Отримання DOM-елементу з ідентифікатором "root"
const rootElement = document.getElementById("root");

// Створення кореневого "контейнера" для рендерингу React-компонентів
const root = createRoot(rootElement);

// Рендеринг основного компонента App у кореневому елементі
root.render(
  <>
    {/* Використання React.StrictMode для покращення режиму розробки */}
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </>,
);
