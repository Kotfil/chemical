import { galleryDataListType } from '@/app/components/gallery-section/gallery-photo/gallery-photo.types';

export function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
  };
}

export const galleryFactoryDataList: galleryDataListType[] = [
  { img: '/assets/factory/1.webp', title: 'Breakfast' },
  { img: '/assets/factory/2.webp', title: 'Burger' },
  { img: '/assets/factory/3.webp', title: 'Camera' },
  { img: '/assets/factory/4.webp', title: 'Coffee' },
  { img: '/assets/factory/5.webp', title: 'Hats' },
  { img: '/assets/factory/6.webp', title: 'Honey' },
  { img: '/assets/factory/7.webp', title: 'Basketball' },
  { img: '/assets/factory/8.webp', title: 'Fern' },
  { img: '/assets/factory/9.webp', title: 'Mushrooms' },
  { img: '/assets/factory/10.webp', title: 'Tomato basil' },
  { img: '/assets/factory/11.webp', title: 'Sea star' },
  { img: '/assets/factory/12.webp', title: 'Bike' },
  { img: '/assets/factory/13.webp', title: 'Mountains' },
  { img: '/assets/factory/14.webp', title: 'Desert' },
  { img: '/assets/factory/15.webp', title: 'City' },
  { img: '/assets/factory/16.webp', title: 'City2' },
  { img: '/assets/factory/17.webp', title: 'City3' },
  { img: '/assets/factory/18.webp', title: 'City4' },
];
export const galleryProduceDataList: galleryDataListType[] = [
  { img: '/assets/produce/1.webp', title: 'Breakfast' },
  { img: '/assets/produce/2.webp', title: 'Burger' },
  { img: '/assets/produce/3.webp', title: 'Camera' },
  { img: '/assets/produce/4.webp', title: 'Coffee' },
  { img: '/assets/produce/5.webp', title: 'Hats' },
  { img: '/assets/produce/6.webp', title: 'Honey' },
  { img: '/assets/produce/7.webp', title: 'Basketball' },
  { img: '/assets/produce/8.webp', title: 'Fern' },
  { img: '/assets/produce/9.webp', title: 'Mushrooms' },
  { img: '/assets/produce/10.webp', title: 'Tomato basil' },
  { img: '/assets/produce/11.webp', title: 'Sea star' },
  { img: '/assets/produce/12.webp', title: 'Bike' },
  { img: '/assets/produce/13.webp', title: 'Mountains' },
  { img: '/assets/produce/14.webp', title: 'Desert' },
  { img: '/assets/produce/15.webp', title: 'City' },
  { img: '/assets/produce/16.webp', title: 'City2' },
  { img: '/assets/produce/17.webp', title: 'City3' },
  { img: '/assets/produce/18.webp', title: 'City4' },
  { img: '/assets/produce/19.webp', title: 'City5' },
  { img: '/assets/produce/20.webp', title: 'City6' },
  { img: '/assets/produce/21.webp', title: 'City7' },
  { img: '/assets/produce/22.webp', title: 'City8' },
  { img: '/assets/produce/23.webp', title: 'City9' },
  { img: '/assets/produce/24.webp', title: 'City10' },
];
