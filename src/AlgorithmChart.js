import React from "react";
import "./HomePage.css"; // Підключення стилів сторінки
import ReactFlow, { Background, Controls, MiniMap } from "react-flow-renderer";

// Початкові дані для вузлів
const initialNodes = [
  {
    id: "1",
    type: "default",
    data: { label: "Виявлення постраждалого" },
    position: { x: 800, y: 10 },
  },
  {
    id: "2",
    type: "default",
    data: { label: "Постраждалий з термічним опіком" },
    position: { x: 800, y: 25 },
  },
  {
    id: "3",
    type: "default",
    data: { label: "Місце безпечне?" },
    position: { x: 800, y: 40 },
  },
  {
    id: "4",
    type: "default",
    data: { label: "Припинити дію високої температури" },
    position: { x: 750, y: 60 },
  },
  {
    id: "5",
    type: "default",
    data: { label: "Зняти тліючий одяг" },
    position: { x: 750, y: 75 },
  },
  {
    id: "6",
    type: "default",
    data: { label: "Зняти прикраси з ділянки опіку" },
    position: { x: 750, y: 90 },
  },
  {
    id: "7",
    type: "default",
    data: { label: "Заспокоїти постраждалого, пояснити свої дії" },
    position: { x: 750, y: 105 },
  },
  {
    id: "8",
    type: "default",
    data: { label: "Викликати ЕМД" },
    position: { x: 750, y: 120 },
  },
  {
    id: "9",
    type: "default",
    data: { label: "Дотримуватися вказівок диспетчера" },
    position: { x: 750, y: 145 },
  },
  {
    id: "10",
    type: "default",
    data: { label: "Площа опіку більше 20%?" },
    position: { x: 750, y: 160 },
  },
  {
    id: "11",
    type: "default",
    data: { label: "Накрити постраждалого термопокривалом" },
    position: { x: 700, y: 180 },
  },
  {
    id: "12",
    type: "default",
    data: { label: "Охолодити водою" },
    position: { x: 700, y: 195 },
  },
  {
    id: "13",
    type: "default",
    data: { label: "Накласти пов'язку" },
    position: { x: 800, y: 195 },
  },
  {
    id: "14",
    type: "default",
    data: { label: "Забезпечити постійний нагляд до приїзду ЕМД" },
    position: { x: 800, y: 210 },
  },
  {
    id: "15",
    type: "default",
    data: { label: "Є можливість усунути небезпеку?" },
    position: { x: 850, y: 60 },
  },
  {
    id: "16",
    type: "default",
    data: { label: "Усунути небезпеку" },
    position: { x: 825, y: 90 },
  },
  {
    id: "17",
    type: "default",
    data: { label: "Залишатися у безпеці" },
    position: { x: 875, y: 90 },
  },
  {
    id: "18",
    type: "default",
    data: { label: "Викликати ЕМД" },
    position: { x: 875, y: 105 },
  },
  {
    id: "19",
    type: "default",
    data: { label: "Дотримуватися вказівок диспетчера" },
    position: { x: 875, y: 120 },
  },
];

// Початкові дані для з'єднань між вузлами
const initialEdges = [
  { id: "e1-2", source: "1", target: "2" },
  { id: "e2-3", source: "2", target: "3" },
  { id: "e3-4", source: "3", target: "4" },
  { id: "e4-5", source: "4", target: "5" },
  { id: "e5-6", source: "5", target: "6" },
  { id: "e6-7", source: "6", target: "7" },
  { id: "e7-8", source: "7", target: "8" },
  { id: "e8-9", source: "8", target: "9" },
  { id: "e9-10", source: "9", target: "10" },
  { id: "e10-11", source: "10", target: "11" },
  { id: "e11-14", source: "11", target: "14" },
  { id: "e10-12", source: "10", target: "12" },
  { id: "e12-13", source: "12", target: "13" },
  { id: "e13-14", source: "13", target: "14" },
  { id: "e10-12", source: "10", target: "12" },
  { id: "e12-13", source: "12", target: "13" },
];

const AlgorithmChart = () => {
  // Використання React Hooks для стану вузлів та з'єднань
  /*console.log("load element");
  const [nodes] = React.useState(initialNodes);
  const [edges] = React.useState(initialEdges);

  console.log("load element");*/

  try {
    return (
      // Контейнер для ReactFlow компоненту
      <div style={{ height: "900px", width: "100%", margin: "0 auto" }}>
        {/* ReactFlow компонент */}
        <ReactFlow nodes={initialNodes} edges={initialEdges}>
          {/* Додаткові елементи для ReactFlow: Background, Controls, MiniMap */}
          <Background />
          <Controls />
          <MiniMap />
        </ReactFlow>
      </div>
    );
  } catch (error) {
    console.error("Error in AlgorithmChart:", error);
  }
};

export default AlgorithmChart;
