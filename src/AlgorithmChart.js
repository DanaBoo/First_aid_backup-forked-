import React from "react";
import "./HomePage.css"; // Підключення стилів сторінки
import ReactFlow, { Background, Controls, MiniMap } from "react-flow-renderer";

// Початкові дані для вузлів
const initialNodes = [
  {
    id: "1",
    type: "default",
    data: { label: "Виявлення постраждалого" },
    position: { x: 10, y: 100 },
  },
  {
    id: "2",
    type: "default",
    data: { label: "Постраждалий з термічним опіком" },
    position: { x: 20, y: 100 },
  },
  {
    id: "3",
    type: "default",
    data: { label: "Місце безпечне?" },
    position: { x: 30, y: 100 },
  },
  {
    id: "4",
    type: "default",
    data: { label: "Припинити дію високої температури" },
    position: { x: 100, y: 100 },
  },
  {
    id: "5",
    type: "default",
    data: { label: "Зняти тліючий одяг" },
    position: { x: 200, y: 200 },
  },
  {
    id: "6",
    type: "default",
    data: { label: "Зняти прикраси з ділянки опіку" },
    position: { x: 300, y: 300 },
  },
  {
    id: "7",
    type: "default",
    data: { label: "Заспокоїти постраждалого, пояснити свої дії" },
    position: { x: 100, y: 100 },
  },
  {
    id: "8",
    type: "default",
    data: { label: "Викликати ЕМД" },
    position: { x: 200, y: 200 },
  },
  {
    id: "9",
    type: "default",
    data: { label: "Дотримуватися вказівок диспетчера" },
    position: { x: 300, y: 300 },
  },
  {
    id: "10",
    type: "default",
    data: { label: "Площа опіку більше 20%?" },
    position: { x: 100, y: 100 },
  },
  {
    id: "11",
    type: "default",
    data: { label: "Накрити постраждалого термопокривалом" },
    position: { x: 200, y: 200 },
  },
  {
    id: "12",
    type: "default",
    data: { label: "Охолодити водою" },
    position: { x: 300, y: 300 },
  },
  {
    id: "13",
    type: "default",
    data: { label: "Накласти пов'язку" },
    position: { x: 100, y: 100 },
  },
  {
    id: "14",
    type: "default",
    data: { label: "Забезпечити постійний нагляд до приїзду ЕМД" },
    position: { x: 200, y: 200 },
  },
  {
    id: "15",
    type: "default",
    data: { label: "Є можливість усунути небезпеку?" },
    position: { x: 300, y: 300 },
  },
  {
    id: "16",
    type: "default",
    data: { label: "Усунути небезпеку" },
    position: { x: 100, y: 100 },
  },
  {
    id: "17",
    type: "default",
    data: { label: "Залишатися у безпеці" },
    position: { x: 200, y: 200 },
  },
  {
    id: "18",
    type: "default",
    data: { label: "Дотримуватися вказівок диспетчера" },
    position: { x: 300, y: 300 },
  },
];

// Початкові дані для з'єднань між вузлами
const initialEdges = [
  { id: "e1-2", source: "1", target: "2" },
  { id: "e2-3", source: "2", target: "3" },
];

const AlgorithmChart = () => {
  // Використання React Hooks для стану вузлів та з'єднань
  const [nodes] = React.useState(initialNodes);
  const [edges] = React.useState(initialEdges);

  return (
    // Контейнер для ReactFlow компоненту
    <div style={{ height: "900px", width: "100%", margin: "0 auto" }}>
      {/* ReactFlow компонент */}
      <ReactFlow elements={nodes.concat(edges)}>
        {/* Додаткові елементи для ReactFlow: Background, Controls, MiniMap */}
        <Background />
        <Controls />
        <MiniMap />
      </ReactFlow>
    </div>
  );
};

export default AlgorithmChart;
