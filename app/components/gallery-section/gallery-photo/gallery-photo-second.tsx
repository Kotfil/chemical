'use client';
import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Dialog from '@mui/material/Dialog';
import { srcset } from '@/mock/gallery-data.mock';
import { GalleryPhotoSecondProps } from '@/app/components/gallery-section/gallery-photo/gallery-photo.types';

export default function GalleryPhotoSecond({ gallery_produce_list }: GalleryPhotoSecondProps) {
  const [open, setOpen] = React.useState(false);
  const [selectedImg, setSelectedImg] = React.useState('');

  return (
    <>
      <ImageList sx={{ width: '100%', height: '100%' }} variant="quilted" cols={4} rowHeight={121}>
        {gallery_produce_list.map(item => (
          <ImageListItem
            key={item.img}
            cols={item.cols || 1}
            rows={item.rows || 1}
            style={{ cursor: 'pointer' }}
            onClick={() => {
              setSelectedImg(item.img);
              setOpen(true);
            }}
          >
            <img
              {...srcset(item.img, 121, item.rows, item.cols)}
              alt={item.title}
              loading="lazy"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </ImageListItem>
        ))}
      </ImageList>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="lg"
        PaperProps={{
          sx: { backgroundColor: 'transparent', boxShadow: 'none' },
        }}
      >
        <img
          src={selectedImg}
          alt="full"
          style={{ width: '100%', height: 'auto', cursor: 'pointer' }}
          onClick={() => setOpen(false)}
        />
      </Dialog>
    </>
  );
}
