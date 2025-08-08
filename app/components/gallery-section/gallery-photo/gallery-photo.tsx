import GalleryPhotoSecond from '@/app/components/gallery-section/gallery-photo/gallery-photo-second';
import GalleryPhotoFirst from '@/app/components/gallery-section/gallery-photo/gallery-photo-first';
import { Grid } from '@mui/material';
import { getLocaleDict } from '@/app/i18n-service';
import { SubtitleSection } from '@/app/components/subtitle-section/subtitle-section';

export const GalleryPhoto = async () => {
  const { dict } = await getLocaleDict();
  return (
    <Grid pb={10}>
      <Grid>
        <SubtitleSection>{dict.gallery_section.factory_title as string}</SubtitleSection>
        <GalleryPhotoFirst />
      </Grid>
      <Grid py={4}>
        <SubtitleSection>{dict.gallery_section.produce_title as string}</SubtitleSection>
        <GalleryPhotoSecond />
      </Grid>
    </Grid>
  );
};
