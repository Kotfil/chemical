import React, { FC } from 'react';
import { Props } from '@/app/components/subtitle-section/subtitle-section.types';

export const SubtitleSection: FC<Props> = ({ children }) => {
  return (
    <h2 className="   text-lg leading-relaxed   text-center font-blogger italic  text-[120%] tracking-tight text-gray-400 dark:text-white mb-4 leading-tight">
      {children}
    </h2>
  );
};
