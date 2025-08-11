'use client';

import { useCallback, useEffect, useState } from 'react';
import { addEdge, applyEdgeChanges, applyNodeChanges, Background, ReactFlow } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { useTranslation } from '@/app/components/i18n/I18n-context';

const nodeWidth = 300;
const nodeHeight = 70;
const startX = 400;
const startY = 50;
const verticalGap = 100;

export default function CooperationSchedule() {
  const t = useTranslation() as any;
  const labels = t.cooperation_section.cooperation_schedule.labels as string[];

  const createNodes = useCallback(() => {
    return labels.map((label, i) => {
      return {
        id: `${i + 1}`,
        data: { label: `${i + 1}. ${label}` },
        position: { x: startX, y: startY + i * verticalGap },
        className:
          'text-red font-blogger flex items-center justify-center text-center rounded-md bg-blue-500 font-semibold',

        style: {
          fontSize: '1.5rem',
          width: nodeWidth,
          height: nodeHeight,
          borderRadius: 10,
          padding: 10,
          boxSizing: 'border-box',
          cursor: 'default',
          color: 'black',
        },
      };
    });
  }, [labels]);

  // Создаем ребра — стрелки вниз между узлами
  const createEdges = useCallback(() => {
    const edges = [];
    for (let i = 0; i < labels.length - 1; i++) {
      edges.push({
        id: `e-${i + 1}-${i + 2}`,
        source: `${i + 1}`,
        target: `${i + 2}`,
        type: 'smoothstep',
        animated: true,
        style: {
          strokeWidth: 3,
          stroke: '#2a69ac',
          color: 'black',
        },
        markerEnd: {
          type: 'arrowclosed',
          color: '#2a69ac',
        },
      });
    }
    return edges;
  }, [labels]);

  const [nodes, setNodes] = useState(() => createNodes());
  const [edges, setEdges] = useState(() => createEdges());

  useEffect(() => {
    setNodes(createNodes());
    setEdges(createEdges());
  }, [createNodes, createEdges]);
  //@ts-ignore
  const onNodesChange = useCallback(changes => setNodes(nds => applyNodeChanges(changes, nds)), []);
  //@ts-ignore
  const onEdgesChange = useCallback(changes => setEdges(eds => applyEdgeChanges(changes, eds)), []);
  //@ts-ignore
  const onConnect = useCallback(connection => setEdges(eds => addEdge(connection, eds)), []);

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow
        //@ts-ignore
        nodes={nodes}
        //@ts-ignore
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        panOnDrag
        nodesDraggable={false}
        elementsSelectable={false}
      >
        <Background />
      </ReactFlow>
    </div>
  );
}
