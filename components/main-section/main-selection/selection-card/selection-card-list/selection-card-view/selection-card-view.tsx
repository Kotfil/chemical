import React, { FC } from 'react';
import { Card, CardBody } from '@heroui/card';
import { Divider } from '@heroui/divider';
import { SubtitleSection } from '@/components/subtitle-section/subtitle-section';
import { SelectionCardProps } from '@/components/main-section/main-selection/selection-card/selection-card.types';

export const SelectionCardView: FC<SelectionCardProps> = ({ title, description }) => {
  return (
    <Card className="max-w-[400px]">
      <CardBody>
        <SubtitleSection>{title}</SubtitleSection>
        <Divider />
        <p>{description}</p>
      </CardBody>
    </Card>
  );
};
