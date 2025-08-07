'use client';

import { useCallback, useMemo, useState } from 'react';
import { ReactFlow, applyNodeChanges, applyEdgeChanges, addEdge, Background } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { useTranslation } from '@/app/components/i18n/I18n-context';

const centerX = 400;
const centerY = 300;
const radius = 250;

export default function CooperationSchedule() {
  const t = useTranslation() as any;
  const labels = t.cooperation_section.cooperation_schedule.labels as string[];
  const coreLabel = t.cooperation_section.cooperation_schedule.core as string;

  const initialNodes = useMemo(
    () => [
      {
        id: 'core',
        data: { label: coreLabel },
        position: { x: centerX, y: centerY },
        className:
          'w-[200px] h-[100px] text-center pt-7 font-bold rounded-full border-2 border-black dark:border-white bg-blue-200 dark:bg-blue-900 text-black dark:text-black',
        style: {
          width: 200,
          height: 100,
          borderRadius: 100,
          textAlign: 'center',
          paddingTop: 30,
          fontWeight: 'bold',
          background: '#c0d6f9',
          border: '2px solid #222',
        },
      },
      ...labels.map((label, i) => {
        const angle = (i / labels.length) * 2 * Math.PI;
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);
        return {
          id: `${i + 1}`,
          data: { label: `${i + 1}. ${label}` },
          position: { x, y },
          className:
            'p-2 text-xs w-[180px] border border-gray-400 dark:border-gray-600 rounded-md bg-yellow-100 dark:bg-yellow-900 text-black dark:text-black',
          style: {
            padding: 10,
            border: '1px solid #999',
            borderRadius: 8,
            background: '#dbd6b2',
            fontSize: 12,
            width: 180,
          },
        };
      }),
    ],
    [labels, coreLabel],
  );

  const initialEdges = useMemo(
    () =>
      labels.map((_, i) => ({
        id: `e-core-${i + 1}`,
        source: 'core',
        target: `${i + 1}`,
        style: {
          strokeWidth: 2,
          stroke: '#888',
        },
      })),
    [labels],
  );

  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback(changes => setNodes(nds => applyNodeChanges(changes, nds)), []);
  const onEdgesChange = useCallback(changes => setEdges(eds => applyEdgeChanges(changes, eds)), []);
  const onConnect = useCallback(connection => setEdges(eds => addEdge(connection, eds)), []);

  return (
    <div style={{ width: '100vw', height: '100vh', color: 'violet' }}>
      <ReactFlow
        nodes={nodes}
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

// 'use client';
//
// import { useCallback, useState } from 'react';
// import { ReactFlow, applyNodeChanges, applyEdgeChanges, addEdge, Background } from '@xyflow/react';
// import '@xyflow/react/dist/style.css';
//
// const centerX = 400;
// const centerY = 300;
// const radius = 250;
//
// const labels = [
//   'Negotiations',
//   'Signing contract',
//   'Paying deposit',
//   'Checking quality',
//   'Paying remaining amount',
//   'Shipping',
//   'After-sale service',
// ];
//
// const initialNodes = [
//   {
//     id: 'core',
//     data: { label: 'GENERAL ALGORITHM\nOF CO-OPERATION' },
//     position: { x: centerX, y: centerY },
//     className:
//       'w-[200px] h-[100px] text-center pt-7 font-bold rounded-full border-2 border-black dark:border-white bg-blue-200 dark:bg-blue-900 text-black dark:text-black',
//     style: {
//       width: 200,
//       height: 100,
//       borderRadius: 100,
//       textAlign: 'center',
//       paddingTop: 30,
//       fontWeight: 'bold',
//       background: '#c0d6f9',
//       border: '2px solid #222',
//     },
//   },
//   ...labels.map((label, i) => {
//     const angle = (i / labels.length) * 2 * Math.PI;
//     const x = centerX + radius * Math.cos(angle);
//     const y = centerY + radius * Math.sin(angle);
//     return {
//       id: `${i + 1}`,
//       data: { label: `${i + 1}. ${label}` },
//       position: { x, y },
//       className:
//         'p-2 text-xs w-[180px] border border-gray-400 dark:border-gray-600 rounded-md bg-yellow-100 dark:bg-yellow-900 text-black dark:text-black',
//       style: {
//         padding: 10,
//         border: '1px solid #999',
//         borderRadius: 8,
//         background: '#dbd6b2',
//         fontSize: 12,
//         width: 180,
//       },
//     };
//   }),
// ];
//
// const initialEdges = labels.map((_, i) => ({
//   id: `e-core-${i + 1}`,
//   source: 'core',
//   target: `${i + 1}`,
//   style: {
//     strokeWidth: 2,
//     stroke: '#888',
//   },
// }));
//
// export default function CooperationSchedule() {
//   const [nodes, setNodes] = useState(initialNodes);
//   const [edges, setEdges] = useState(initialEdges);
//   //@ts-ignore
//   const onNodesChange = useCallback(
//     //@ts-ignore
//     changes => setNodes(nds => applyNodeChanges(changes, nds)),
//     [],
//   );
//   const onEdgesChange = useCallback(
//     //@ts-ignore
//     changes => setEdges(eds => applyEdgeChanges(changes, eds)),
//     [],
//   );
//   const onConnect = useCallback(
//     //@ts-ignore
//     connection => setEdges(eds => addEdge(connection, eds)),
//     [],
//   );
//
//   return (
//     <div style={{ width: '100vw', height: '100vh', color: 'violet' }}>
//       <ReactFlow
//         //@ts-ignore
//         nodes={nodes}
//         edges={edges}
//         onNodesChange={onNodesChange}
//         onEdgesChange={onEdgesChange}
//         onConnect={onConnect}
//         fitView
//         panOnDrag
//         nodesDraggable={false}
//         elementsSelectable={false}
//       >
//         <Background />
//       </ReactFlow>
//     </div>
//   );
// }
