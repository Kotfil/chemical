import React, { FC } from 'react';
import { Props } from '@/app/components/subtitle-section/subtitle-section.types';

export const Text: FC<Props> = ({ children }) => {
  return (
    <h2 className="   text-lg  text-center font-blogger italic  text-[140%] tracking-tight text-gray-400 dark:text-white mb-4 leading-tight">
      {children}
    </h2>
  );
};
