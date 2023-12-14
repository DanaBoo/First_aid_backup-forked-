import React from "react";
import "./HomePage.css"; // Підключення стилів сторінки
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  Position,
  MarkerType,
} from "react-flow-renderer";

// Початкові дані для вузлів
const initialNodes = [
  {
    id: "1",
    type: "default",
    data: { label: "Виявлення постраждалого" },
    position: { x: 750, y: 0 },
  },
  {
    id: "2",
    type: "default",
    data: { label: "Постраждалий з термічним опіком" },
    position: { x: 750, y: 80 },
  },
  {
    id: "3",
    type: "default",
    data: { label: "Місце безпечне?" },
    position: { x: 750, y: 160 },
    sourcePosition: Position.Left,
    targetPosition: Position.Top,
  },
  {
    id: "4",
    type: "default",
    data: { label: "Припинити дію високої температури" },
    position: { x: 600, y: 220 },
  },
  {
    id: "5",
    type: "default",
    data: { label: "Зняти тліючий одяг" },
    position: { x: 600, y: 300 },
  },
  {
    id: "6",
    type: "default",
    data: { label: "Зняти прикраси з ділянки опіку" },
    position: { x: 600, y: 365 },
  },
  {
    id: "7",
    type: "default",
    data: { label: "Заспокоїти постраждалого, пояснити свої дії" },
    position: { x: 600, y: 450 },
  },
  {
    id: "8",
    type: "default",
    data: { label: "Викликати ЕМД" },
    position: { x: 600, y: 550 },
  },
  {
    id: "9",
    type: "default",
    data: { label: "Дотримуватися вказівок диспетчера" },
    position: { x: 600, y: 620 },
  },
  {
    id: "10",
    type: "default",
    data: { label: "Площа опіку більше 20%?" },
    position: { x: 600, y: 700 },
    sourcePosition: Position.Left,
    targetPosition: Position.Top,
  },
  {
    id: "11",
    type: "default",
    data: { label: "Накрити постраждалого термопокривалом" },
    position: { x: 450, y: 800 },
  },
  {
    id: "12",
    type: "default",
    data: { label: "Охолодити водою" },
    position: { x: 750, y: 780 },
  },
  {
    id: "13",
    type: "default",
    data: { label: "Накласти пов'язку" },
    position: { x: 750, y: 850 },
  },
  {
    id: "14",
    type: "default",
    data: { label: "Забезпечити постійний нагляд до приїзду ЕМД" },
    position: { x: 600, y: 950 },
  },
  {
    id: "15",
    type: "default",
    data: { label: "Є можливість усунути небезпеку?" },
    position: { x: 1100, y: 220 },
    sourcePosition: Position.Right,
    targetPosition: Position.Top,
  },
  {
    id: "16",
    type: "default",
    data: { label: "Усунути небезпеку" },
    position: { x: 950, y: 300 },
  },
  {
    id: "17",
    type: "default",
    data: { label: "Залишатися у безпеці" },
    position: { x: 1250, y: 300 },
  },
  {
    id: "18",
    type: "default",
    data: { label: "Викликати ЕМД" },
    position: { x: 1250, y: 370 },
  },
  {
    id: "19",
    type: "default",
    data: { label: "Дотримуватися вказівок диспетчера" },
    position: { x: 1250, y: 440 },
  },
  {
    id: "20",
    type: "default",
    data: { label: "Повернутися до ''Місце безпечне?''" },
    position: { x: 950, y: 370 },
  },
];

// Початкові дані для з'єднань між вузлами
const initialEdges = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    type: "smoothstep",
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: "e2-3",
    source: "2",
    target: "3",
    type: "smoothstep",
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: "e3-4",
    source: "3",
    target: "4",
    type: "smoothstep",
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
    label: "Так",
    labelStyle: {
      fontSize: "20px",
    },
  },
  {
    id: "e4-5",
    source: "4",
    target: "5",
    type: "smoothstep",
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: "e5-6",
    source: "5",
    target: "6",
    type: "smoothstep",
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: "e6-7",
    source: "6",
    target: "7",
    type: "smoothstep",
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: "e7-8",
    source: "7",
    target: "8",
    type: "smoothstep",
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: "e8-9",
    source: "8",
    target: "9",
    type: "smoothstep",
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: "e9-10",
    source: "9",
    target: "10",
    type: "smoothstep",
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: "e10-11",
    source: "10",
    target: "11",
    type: "smoothstep",
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
    label: "Так",
    labelStyle: {
      fontSize: "20px",
    },
  },
  {
    id: "e11-14",
    source: "11",
    target: "14",
    type: "smoothstep",
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: "e10-12",
    source: "10",
    target: "12",
    type: "smoothstep",
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
    label: "Ні",
    labelStyle: {
      fontSize: "20px",
    },
  },
  {
    id: "e12-13",
    source: "12",
    target: "13",
    type: "smoothstep",
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: "e13-14",
    source: "13",
    target: "14",
    type: "smoothstep",
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: "e3-15",
    source: "3",
    target: "15",
    type: "smoothstep",
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
    label: "Ні",
    labelStyle: {
      fontSize: "20px",
    },
  },
  {
    id: "e15-16",
    source: "15",
    target: "16",
    type: "smoothstep",
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
    label: "Так",
    labelStyle: {
      fontSize: "20px",
    },
  },
  {
    id: "e16-20",
    source: "16",
    target: "20",
    type: "smoothstep",
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: "e15-17",
    source: "15",
    target: "17",
    type: "smoothstep",
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
    label: "Ні",
    labelStyle: {
      fontSize: "20px",
    },
  },
  {
    id: "e17-18",
    source: "17",
    target: "18",
    type: "smoothstep",
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: "e18-19",
    source: "18",
    target: "19",
    type: "smoothstep",
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
];

const AlgorithmChart = () => {
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
};

export default AlgorithmChart;
