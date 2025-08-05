import React, { FC } from 'react';
import { Card, CardBody } from '@heroui/card';
import { Divider } from '@heroui/divider';
import { SelectionCardProps } from '@/app/components/main-section/main-selection/main-card/selection-card.types';
import { SubtitleSection } from '@/app/components/subtitle-section/subtitle-section';

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
