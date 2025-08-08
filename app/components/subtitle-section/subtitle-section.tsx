import React, { FC } from 'react';
import { Props } from '@/app/components/subtitle-section/subtitle-section.types';

export const SubtitleSection: FC<Props> = ({ children }) => {
  return (
    <h2 className="text-[clamp(1.035rem,1.38vw,1.29375rem)] font-extrabold tracking-tight text-gray-900 dark:text-white mb-4 leading-tight">
      {children}
    </h2>
  );
};
