import React, { FC } from 'react';
import { title } from '@/app/components/styles/primitives';
import { getLocaleDict } from '@/app/i18n-service';

export const MainTitle: FC = async () => {
  const { dict } = await getLocaleDict();
  return (
    <>
      <div className="inline-block max-w-xl text-center justify-center ">
        <span className={title({ color: 'yellow' })}>{dict.main_section.title_first}</span>
        <span className={title({ color: 'violet' })}>{dict.main_section.title_second}</span>
        <br />
        <span className={title({ color: 'blue' })}>{dict.main_section.title_third}</span>
      </div>
    </>
  );
};
