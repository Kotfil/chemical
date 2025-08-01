'use client';
import React, { FC, useMemo } from 'react';
import { SelectionCardList } from '@/components/main-section/main-selection/selection-card/selection-card-list/selection-card-list';
import { useTranslation } from 'react-i18next';
import { SelectionCardProps } from '@/components/main-section/main-selection/selection-card/selection-card.types';

export const SelectionCard: FC = () => {
  const { t } = useTranslation();

  const selectionCardList: SelectionCardProps[] = useMemo(() => {
    const result = t('selection.selection_card_list', { returnObjects: true });
    if (Array.isArray(result)) {
      return result as SelectionCardProps[];
    }
    console.error('Перевод selection не является массивом:', result);
    return [];
  }, [t]);
  return <SelectionCardList selectionCardList={selectionCardList} />;
};
