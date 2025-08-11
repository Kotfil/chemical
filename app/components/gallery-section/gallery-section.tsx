import { Grid } from '@mui/material';
import { GalleryPhoto } from '@/app/components/gallery-section/gallery-photo/gallery-photo';
import { GalleryVideoList } from '@/app/components/gallery-section/gallery-video-list/gallery-video-list';

export const GallerySection = () => {
  return (
    <Grid width={'100%'} display={'flex'} flexDirection={'column'} px={2}>
      <Grid pb={2} pt={3}>
        <GalleryPhoto />
      </Grid>
      <Grid>
        <GalleryVideoList />
      </Grid>
    </Grid>
  );
};
