import { galleryDataListType } from '@/app/components/gallery-section/gallery-photo/gallery-photo.types';

export function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
  };
}

export const galleryFactoryDataList: galleryDataListType[] = [
  { img: '/assets/factory/1.webp', title: 'factory_1' },
  { img: '/assets/factory/2.webp', title: 'factory_2' },
  { img: '/assets/factory/3.webp', title: 'factory_3' },
  { img: '/assets/factory/4.webp', title: 'factory_4' },
  { img: '/assets/factory/5.webp', title: 'factory_5' },
  { img: '/assets/factory/6.webp', title: 'factory_6' },
  { img: '/assets/factory/7.webp', title: 'factory_7' },
  { img: '/assets/factory/8.webp', title: 'factory_8' },
  { img: '/assets/factory/9.webp', title: 'factory_9' },
  { img: '/assets/factory/10.webp', title: 'factory_10' },
  { img: '/assets/factory/11.webp', title: 'factory_11' },
  { img: '/assets/factory/12.webp', title: 'factory_12' },
  { img: '/assets/factory/13.webp', title: 'factory_13' },
  { img: '/assets/factory/14.webp', title: 'factory_14' },
  { img: '/assets/factory/15.webp', title: 'factory_15' },
  { img: '/assets/factory/16.webp', title: 'factory_16' },
  { img: '/assets/factory/17.webp', title: 'factory_17' },
  { img: '/assets/factory/18.webp', title: 'factory_18' },
];
export const galleryProduceDataList: galleryDataListType[] = [
  { img: '/assets/produce/1.webp', title: 'produce_1' },
  { img: '/assets/produce/2.webp', title: 'produce_2' },
  { img: '/assets/produce/3.webp', title: 'produce_3' },
  { img: '/assets/produce/4.webp', title: 'produce_4' },
  { img: '/assets/produce/5.webp', title: 'produce_5' },
  { img: '/assets/produce/6.webp', title: 'produce_6' },
  { img: '/assets/produce/7.webp', title: 'produce_7' },
  { img: '/assets/produce/8.webp', title: 'produce_8' },
  { img: '/assets/produce/9.webp', title: 'produce_9' },
  { img: '/assets/produce/10.webp', title: 'produce_10' },
  { img: '/assets/produce/11.webp', title: 'produce_11' },
  { img: '/assets/produce/12.webp', title: 'produce_12' },
  { img: '/assets/produce/13.webp', title: 'produce_13' },
  { img: '/assets/produce/14.webp', title: 'produce_14' },
  { img: '/assets/produce/15.webp', title: 'produce_15' },
  { img: '/assets/produce/16.webp', title: 'produce_16' },
  { img: '/assets/produce/17.webp', title: 'produce_17' },
  { img: '/assets/produce/18.webp', title: 'produce_18' },
  { img: '/assets/produce/19.webp', title: 'produce_19' },
  { img: '/assets/produce/20.webp', title: 'produce_20' },
  { img: '/assets/produce/21.webp', title: 'produce_21' },
  { img: '/assets/produce/22.webp', title: 'produce_22' },
  { img: '/assets/produce/23.webp', title: 'produce_23' },
  { img: '/assets/produce/24.webp', title: 'produce_24' },
];
