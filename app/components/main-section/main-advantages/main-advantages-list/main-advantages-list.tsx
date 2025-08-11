import { getLocaleDict } from '@/app/i18n-service';
import { Skeleton } from '@heroui/react';
import React from 'react';
import { MainAdvantagesView } from '@/app/components/main-section/main-advantages/main-advantages-list/main-advantages-view/main-advantages-view';
import { AdvantageItem } from '@/app/components/main-section/main-advantages/main-advantages-list/main-advantages-list.types';

export const MainAdvantagesList = async () => {
  const { dict } = await getLocaleDict();

  const advantagesList = dict.main_section.main_advantages.main_advantages_list as AdvantageItem[];

  if (!advantagesList.length) return <Skeleton />; // безопасный fallback на пустой список

  return (
    <div className="font-blogger grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center">
      {advantagesList.map((item, idx) => (
        <MainAdvantagesView key={idx} item={item} />
      ))}
    </div>
  );
};
