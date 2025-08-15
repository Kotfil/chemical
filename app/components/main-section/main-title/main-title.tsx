import React, { FC } from 'react';
import { title } from '@/app/components/styles/primitives';
import { getLocaleDict } from '@/app/i18n-service';
import { Wrapper } from '@/app/components/main-section/main-title/main-title.styles';

export const MainTitle: FC = async () => {
  const { dict } = await getLocaleDict();
  return (
    <Wrapper>
      <div className="font-blogger inline-block max-w-xl text-center justify-center leading-[1]  text-[150%]">
        <span className={title({ color: 'yellow' })}>{dict.main_section.title_first}</span>
        <span className={title({ color: 'violet' })}>{dict.main_section.title_second}</span>
        <br />
        <span className={title({ color: 'blue' })}>{dict.main_section.title_third}</span>
      </div>
    </Wrapper>
  );
};
