import React from "react";
import ReactFlow, { Background, Controls, MiniMap } from "react-flow-renderer";

const nodes = [
  {
    id: "1",
    type: "default",
    data: { label: "Start" },
    position: { x: 100, y: 100 },
    style: {
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

const edges = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    animated: true,
    style: { stroke: "#000", strokeWidth: "2px" },
  },
  // Define connections between nodes
];

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

{
  /* const AlgorithmChart = () => {
  return (
    <div style={{ height: "500px", width: "80%", margin: "0 auto" }}>
      <ReactFlow elements={nodes.concat(edges)}>
        <Background />
      </ReactFlow>
    </div>
  );
}; */
}

export default AlgorithmChart;
