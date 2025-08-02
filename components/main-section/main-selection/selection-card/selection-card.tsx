'use client';
import React, { FC, useMemo } from 'react';
import { useTranslation } from 'next-i18next';
import { SelectionCardProps } from '@/components/main-section/main-selection/selection-card/selection-card.types';
import { SelectionCardList } from './selection-card-list/selection-card-list';

export const SelectionCard: FC = () => {
  const { t } = useTranslation();

  const selectionCardList: SelectionCardProps[] = useMemo(() => {
    const result = t('selection.selection_card_list', { returnObjects: true });
    return Array.isArray(result) ? result : [];
  }, [t]);
  return <SelectionCardList selectionCardList={selectionCardList} />;
};
