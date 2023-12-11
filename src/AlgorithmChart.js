import React from "react";
import "./HomePage.css"; // Підключення стилів сторінки
import ReactFlow, { Background, Controls, MiniMap } from "react-flow-renderer";

// Встановлення елементів алгоритму
const nodes = [
  {
    id: "1",
    type: "default",
    data: { label: "Start" },
    position: { x: 100, y: 100 },
    hidden: false,
    style: {
      width: "10px",
      height: "10px",
      background: "#e3002b",
      border: "1px solid #333",
      borderRadius: "8px",
      padding: "8px",
    },
  },
  {
    id: "2",
    type: "default",
    data: { label: "Next" },
    position: { x: 250, y: 100 },
    style: {
      background: "#e3002b",
      border: "1px solid #333",
      borderRadius: "8px",
      padding: "8px",
    },
  },
];

// Встіновлення зв'язків між елементами
const edges = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    animated: true,
    style: { stroke: "#000", strokeWidth: "2px" },
  },
];

// Функціональний компонент для відображення діаграми алгоритму
const AlgorithmChart = () => {
  return (
    <div style={{ height: "900px", width: "100%", margin: "0 auto" }}>
      <ReactFlow elements={nodes.concat(edges)}>
        <Background />
        <Controls />
        <MiniMap />
      </ReactFlow>
    </div>
  );
};

export default AlgorithmChart;

{
  /*}
import React, { useCallback } from "react";
import ReactFlow, {
  addEdge,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
} from "reactflow";

import {
  nodes as initialNodes,
  edges as initialEdges,
} from "./initial-elements";
import CustomNode from "./CustomNode";

import "reactflow/dist/style.css";
import "./overview.css";

const nodeTypes = {
  custom: CustomNode,
};

const minimapStyle = {
  height: 120,
};

const onInit = (reactFlowInstance) =>
  console.log("flow loaded:", reactFlowInstance);

const OverviewFlow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [],
  );

  // we are using a bit of a shortcut here to adjust the edge type
  // this could also be done with a custom edge for example
  const edgesWithUpdatedTypes = edges.map((edge) => {
    if (edge.sourceHandle) {
      const edgeType = nodes.find((node) => node.type === "custom").data
        .selects[edge.sourceHandle];
      edge.type = edgeType;
    }

    return edge;
  });

  return (
    <ReactFlow
      nodes={nodes}
      edges={edgesWithUpdatedTypes}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      onInit={onInit}
      fitView
      attributionPosition="top-right"
      nodeTypes={nodeTypes}
    >
      <MiniMap style={minimapStyle} zoomable pannable />
      <Controls />
      <Background color="#aaa" gap={16} />
    </ReactFlow>
  );
};

export default OverviewFlow;
*/
}
