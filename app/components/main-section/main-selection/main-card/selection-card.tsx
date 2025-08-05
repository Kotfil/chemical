import { SelectionCardList } from '@/app/components/main-section/main-selection/main-card/selection-card-list/selection-card-list';

export const dynamic = 'force-dynamic';

export const SelectionCard = async () => {
  // const { dict } = await getLocaleDict();
  // console.log(dict, 'dict');
  const mock = [
    {
      title: 'STABLE STRONG PARTNERS',
      description:
        'We cooperated with many famous manufacturers home and abroad. We have stable supply chain so that we can provide you best price and stable quality, according to your market we can choose the best source of goods to meet your requirements.',
    },
    {
      title: 'CONVENIENT LOCATION',
      description:
        'Provide you best price and stable quality, according to your market we can choose the more accurately and gives customers peace of mind.',
    },
    {
      title: 'SKILLFUL WORKING SYSTEM',
      description:
        'With many years experience,we have mature shipping agent, we can plan orders in time and strike a good balance between shipping time and expenses to help customers save a lot of costs without delaying the sales plan.',
    },
    {
      title: 'QUALITY ASSURANCE',
      description:
        'We can supply COA, COO, MSDS, TDS and other certificates that you need for easier clearance and check products quality.',
    },
    {
      title: 'FAST DELIVERY',
      description:
        'Based on our strong supply chain and expertise on shipping, we can ship quickly according to the agreed time to ensure that the goods arrive at the destination port on time without delaying your normal use.',
    },
    {
      title: 'COMPETITIVE PRICE',
      description:
        'We are the first-level agent of many kinds of factories. Based on our huge shipment volume, we can get a competitive price from the factory plus our professional export services that will make us outstand on the international trade.',
    },
  ];

  // const selectionCardList = dict.selection.selection_card_list as SelectionCardProps[];
  return <SelectionCardList selectionCardList={mock} />;
};
