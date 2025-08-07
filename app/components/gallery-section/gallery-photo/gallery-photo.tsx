import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function GalleryPhoto() {
  return (
    <ImageList sx={{ width: '100%', height: '100%' }} variant="quilted" cols={4} rowHeight={121}>
      {itemData.map(item => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img {...srcset(item.img, 121, item.rows, item.cols)} alt={item.title} loading="lazy" />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: '/assets/1.jpg',
    title: 'Breakfast',
    rows: 2,
    cols: 2,
  },
  {
    img: '/assets/2.jpg',
    title: 'Burger',
    rows: 3,
    cols: 2,
  },
  {
    img: '/assets/3.jpg',
    title: 'Camera',
    rows: 1,
    cols: 1,
  },
  {
    img: '/assets/4.jpg',
    title: 'Coffee',
    rows: 3,
    cols: 2,
  },
  {
    img: '/assets/5.jpg',
    title: 'Hats',
    rows: 3,
    cols: 2,
  },
  {
    img: '/assets/6.jpg',
    title: 'Honey',
    author: '@arwinneil',
    rows: 1,
    cols: 1,
  },
  {
    img: '/assets/7.jpg',
    title: 'Basketball',
  },
  {
    img: '/assets/8.jpg',
    title: 'Fern',
  },
  {
    img: '/assets/9.jpg',
    title: 'Mushrooms',
    rows: 2,
    cols: 2,
  },
  {
    img: '/assets/10.jpg',
    title: 'Tomato basil',
    rows: 1,
    cols: 1,
  },
  {
    img: '/assets/11.jpg',
    title: 'Sea star',
    rows: 1,
    cols: 1,
  },
  {
    img: '/assets/12.jpg',
    title: 'Bike',
    rows: 2,
    cols: 2,
  },
  {
    img: '/assets/13.jpg',
    title: 'Mountains',
    rows: 1,
    cols: 1,
  },
  {
    img: '/assets/14.jpg',
    title: 'Desert',
    rows: 2,
    cols: 2,
  },
  {
    img: '/assets/15.jpg',
    title: 'City',
    rows: 3,
    cols: 2,
  },
];
