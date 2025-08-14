import GalleryPhotoSecond from '@/app/components/gallery-section/gallery-photo/gallery-photo-second';
import GalleryPhotoFirst from '@/app/components/gallery-section/gallery-photo/gallery-photo-first';
import { Grid } from '@mui/material';
import { getLocaleDict } from '@/app/i18n-service';
import { SubtitleSection } from '@/app/components/subtitle-section/subtitle-section';
import { GalleryItem } from '@/app/components/gallery-section/gallery-photo/gallery-photo.types';

export const GalleryPhoto = async () => {
  const { dict } = await getLocaleDict();
  const gallery_factory_list: GalleryItem[] = dict.gallery_section.gallery_factory_list;
  const gallery_produce_list: GalleryItem[] = dict.gallery_section.gallery_produce_list;
  return (
    <Grid pb={10}>
      <Grid>
        <SubtitleSection>{dict.gallery_section.factory_title as string}</SubtitleSection>
        <GalleryPhotoFirst gallery_factory_list={gallery_factory_list} />
      </Grid>
      <Grid py={4}>
        <SubtitleSection>{dict.gallery_section.produce_title as string}</SubtitleSection>
        <GalleryPhotoSecond gallery_produce_list={gallery_produce_list} />
      </Grid>
    </Grid>
  );
};
