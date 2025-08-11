import React, { FC } from 'react';
import { Props } from '@/app/components/subtitle-section/subtitle-section.types';

export const SubtitleSection: FC<Props> = ({ children }) => {
  return (
    <h2 className="font-blogger italic  text-[clamp(1.035rem,1.38vw,1.29375rem)] tracking-tight text-gray-400 dark:text-white mb-4 leading-tight">
      {children}
    </h2>
  );
};
