// selection-card-list.tsx
'use client';

import React, { FC } from 'react';
import dynamic from 'next/dynamic';
import { Skeleton } from '@heroui/react';
import { SelectionCardProps } from '@/app/components/main-section/main-selection/main-card/selection-card.types';

const SelectionCardView = dynamic(
  () => import('./selection-card-view/selection-card-view').then(mod => mod.SelectionCardView),
  {
    ssr: false,
    loading: () => <Skeleton />,
  },
);

export const SelectionCardList: FC<{ selectionCardList: SelectionCardProps[] }> = ({ selectionCardList }) => {
  if (!selectionCardList.length) return <Skeleton />; // безопасный fallback на пустой список

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center">
      {selectionCardList.map((card, idx) => (
        <SelectionCardView key={idx} {...card} />
      ))}
    </div>
  );
};
