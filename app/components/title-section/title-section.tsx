import React, { FC } from 'react';
import { Props } from '@/app/components/title-section/title-section.types';

export const TitleSection: FC<Props> = ({ children }) => {
  return (
    <h2 className="text-[clamp(0.8625rem,1.725vw,1.38rem)] font-extrabold tracking-tight text-gray-900 dark:text-white mb-4 leading-tight">
      {children}
    </h2>
  );
};
