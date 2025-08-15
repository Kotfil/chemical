import React, { FC } from 'react';
import { Props } from '@/app/components/title-section/title-section.types';

export const TitleSection: FC<Props> = ({ children, color }) => {
  return (
    <h2
      style={{ lineHeight: '1.2', color: color || 'white' }}
      className="
      text-center
        font-blogger
text-[clamp(1.618rem,3.235vw,2.588rem)]
  tracking-tight
  dark:text-white
  mb-4
  leading-normal
  sm:leading-tight
      "
    >
      {children}
    </h2>
  );
};
