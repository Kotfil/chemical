import React, { FC } from 'react';
import { MainTitle } from './main-title/main-title';
import { MainChoice } from '@/app/components/main-section/main-choice/main-choice';
import { MainSelection } from '@/app/components/main-section/main-selection/main-selection';

export const MainSection: FC = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <MainTitle />
      <MainChoice />
      <MainSelection />
    </section>
  );
};
