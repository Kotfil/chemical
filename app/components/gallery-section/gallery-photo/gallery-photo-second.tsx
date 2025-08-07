'use client';
import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { galleryProduceDataList, srcset } from '@/mock/gallery-data.mock';

export default function GalleryPhotoSecond() {
  return (
    <ImageList sx={{ width: '100%', height: '100%' }} variant="quilted" cols={4} rowHeight={121}>
      {galleryProduceDataList.map(item => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img {...srcset(item.img, 121, item.rows, item.cols)} alt={item.title} loading="lazy" />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
