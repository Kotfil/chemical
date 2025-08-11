import React, { FC } from 'react';
import { Skeleton } from '@heroui/react';
import { SelectionCardProps } from '@/app/components/main-section/main-selection/main-card/selection-card.types';
import { SelectionCardView } from '@/app/components/main-section/main-selection/main-card/selection-card-list/selection-card-view/selection-card-view';

export const SelectionCardList: FC<{ selectionCardList: SelectionCardProps[] }> = ({ selectionCardList }) => {
  if (!selectionCardList.length) return <Skeleton />; // безопасный fallback на пустой список

  return (
    <div className="font-blogger grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center">
      {selectionCardList.map((card, idx) => (
        <SelectionCardView key={idx} {...card} />
      ))}
    </div>
  );
};
