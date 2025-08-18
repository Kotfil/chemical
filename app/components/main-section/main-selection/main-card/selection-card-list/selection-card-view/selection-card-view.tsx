import React, { FC } from 'react';
import { Card, CardBody } from '@heroui/card';
import { Divider } from '@heroui/divider';
import { SelectionCardProps } from '@/app/components/main-section/main-selection/main-card/selection-card.types';
import { SubtitleSection } from '@/app/components/subtitle-section/subtitle-section';

export const SelectionCardView: FC<SelectionCardProps> = ({ title, text }) => {
  return (
    <Card className="max-w-[400px] h-[210px]">
      {/* фиксированная высота */}
      <CardBody className="flex flex-col h-full">
        <SubtitleSection>{title}</SubtitleSection>
        <Divider />
        <p className="text-[clamp(0.963rem,1.925vw,1.540rem)]pt-1 font-blogger flex-grow overflow-hidden">{text}</p>
      </CardBody>
    </Card>
  );
};
