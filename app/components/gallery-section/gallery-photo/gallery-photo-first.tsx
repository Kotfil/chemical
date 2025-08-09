// 'use client';
// import * as React from 'react';
// import ImageList from '@mui/material/ImageList';
// import ImageListItem from '@mui/material/ImageListItem';
// import { galleryFactoryDataList, srcset } from '@/mock/gallery-data.mock';
//
// export default function GalleryPhotoFirst() {
//   return (
//     <ImageList sx={{ width: '100%', height: '100%' }} variant="quilted" cols={4} rowHeight={121}>
//       {galleryFactoryDataList.map(item => (
//         <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
//           <img {...srcset(item.img, 121, item.rows, item.cols)} alt={item.title} loading="lazy" />
//         </ImageListItem>
//       ))}
//     </ImageList>
//   );
// }

'use client';
import * as React from 'react';
import Image from 'next/image';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';
import { galleryFactoryDataList } from '@/mock/gallery-data.mock';

export default function GalleryPhotoFirst() {
  const [loadedImages, setLoadedImages] = React.useState<Record<string, boolean>>({});

  const handleImageLoad = (img: string) => {
    setLoadedImages(prev => ({ ...prev, [img]: true }));
  };

  return (
    <ImageList sx={{ width: '100%', height: '100%' }} variant="quilted" cols={4} rowHeight={121}>
      {galleryFactoryDataList.map(item => {
        const isLoaded = loadedImages[item.img];
        return (
          <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
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
  );
}
