import React, { FC } from 'react';
import { Props } from '@/app/components/subtitle-section/subtitle-section.types';

export const SubtitleSection: FC<Props> = ({ children }) => {
  return (
    <h2 className="  text-center font-blogger italic  text-[clamp(1.618rem,2.156vw,2.021rem)] tracking-tight text-gray-400 dark:text-white mb-4 leading-tight">
      {children}
    </h2>
  );
};
