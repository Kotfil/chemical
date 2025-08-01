import React, { FC } from 'react';
import { Props } from '@/components/title-section/title-section.types';

export const TitleSection: FC<Props> = ({ children }) => {
  return (
    <h2 className="text-[clamp(1.725rem,3.45vw,2.76rem)] font-extrabold tracking-tight text-gray-900 dark:text-white mb-4 leading-tight">
      {children}
    </h2>
  );
};
