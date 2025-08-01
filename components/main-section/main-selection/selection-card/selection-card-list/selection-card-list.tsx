'use client';
import React, { FC } from 'react';
import { SelectionCardProps } from '@/components/main-section/main-selection/selection-card/selection-card.types';
import { SelectionCardView } from '@/components/main-section/main-selection/selection-card/selection-card-list/selection-card-view/selection-card-view';

export const SelectionCardList: FC<{ selectionCardList: SelectionCardProps[] }> = ({ selectionCardList }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center">
      {selectionCardList.map((card, idx) => (
        <SelectionCardView key={idx} {...card} />
      ))}
    </div>
  );
};
