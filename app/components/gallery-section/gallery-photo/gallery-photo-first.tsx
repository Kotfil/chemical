'use client';
import * as React from 'react';
import Image from 'next/image';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import { GalleryPhotoFirstProps } from '@/app/components/gallery-section/gallery-photo/gallery-photo.types';

export default function GalleryPhotoFirst({ gallery_factory_list }: GalleryPhotoFirstProps) {
  const [loadedImages, setLoadedImages] = React.useState<Record<string, boolean>>({});
  const [open, setOpen] = React.useState(false);
  const [selectedImg, setSelectedImg] = React.useState('');

  const handleImageLoad = (img: string) => {
    setLoadedImages(prev => ({ ...prev, [img]: true }));
  };

  return (
    <>
      <ImageList sx={{ width: '100%', height: '100%' }} variant="quilted" cols={4} rowHeight={121}>
        {gallery_factory_list.map(item => {
          const isLoaded = loadedImages[item.img];
          return (
            <ImageListItem
              key={item.img}
              cols={item.cols || 1}
              rows={item.rows || 1}
              onClick={() => {
                setSelectedImg(item.img);
                setOpen(true);
              }}
              style={{ cursor: 'pointer' }}
            >
              <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
                {!isLoaded && (
                  <Skeleton
                    variant="rectangular"
                    width="100%"
                    height="100%"
                    sx={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }}
                  />
                )}
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  sizes="(max-width: 600px) 100vw, 25vw"
                  style={{
                    objectFit: 'cover',
                    opacity: isLoaded ? 1 : 0,
                    transition: 'opacity 0.3s ease-in-out',
                  }}
                  onLoad={() => handleImageLoad(item.img)}
                />
              </Box>
            </ImageListItem>
          );
        })}
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
