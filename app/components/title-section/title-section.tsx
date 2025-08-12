import React, { FC } from 'react';
import { Props } from '@/app/components/title-section/title-section.types';

export const TitleSection: FC<Props> = ({ children, color }) => {
  return (
    <h2
      style={{ lineHeight: '0.3', color: color || 'white' }}
      className="font-blogger text-[clamp(1.0781rem,2.15625vw,1.725rem)] tracking-tight dark:text-white mb-4 leading-tight"
    >
      {children}
    </h2>
  );
};
