import { SelectionCardList } from '@/app/components/main-section/main-selection/main-card/selection-card-list/selection-card-list';
import { getLocaleDict } from '@/app/i18n-service';
import { SelectionCardProps } from '@/app/components/main-section/main-selection/main-card/selection-card.types';

export const dynamic = 'force-dynamic';

export const SelectionCard = async () => {
  const { dict } = await getLocaleDict();

  const selectionCardList = dict.main_section.main_selection.main_selection_list as SelectionCardProps[];
  return <SelectionCardList selectionCardList={selectionCardList} />;
};
