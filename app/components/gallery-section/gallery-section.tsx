import { Grid } from '@mui/material';
import { GalleryPhoto } from '@/app/components/gallery-section/gallery-photo/gallery-photo';
import { GalleryVideo } from '@/app/components/gallery-section/gallery-video/gallery-video';
import { getLocaleDict } from '@/app/i18n-service';
import { TitleSection } from '@/app/components/title-section/title-section';

export const GallerySection = async () => {
  const { dict } = await getLocaleDict();
  return (
    <Grid width={'100%'} display={'flex'} flexDirection={'column'} px={2}>
      <Grid>
        <TitleSection> {dict.gallery_section.title as string}</TitleSection>
      </Grid>
      <Grid>
        <GalleryPhoto />
      </Grid>
      <Grid>
        <GalleryVideo />
      </Grid>
    </Grid>
  );
};
