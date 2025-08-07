import GalleryPhotoSecond from '@/app/components/gallery-section/gallery-photo/gallery-photo-second';
import GalleryPhotoFirst from '@/app/components/gallery-section/gallery-photo/gallery-photo-first';
import { Grid } from '@mui/material';
import { getLocaleDict } from '@/app/i18n-service';

export const GalleryPhoto = async () => {
  const { dict } = await getLocaleDict();
  return (
    <Grid pb={10}>
      <Grid>
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4 leading-tight">
          {dict.gallery_section.produce_title as string}
        </h3>
        <GalleryPhotoFirst />
      </Grid>
      <Grid py={4}>
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4 leading-tight">
          {dict.gallery_section.factory_title as string}
        </h3>
        <GalleryPhotoSecond />
      </Grid>
    </Grid>
  );
};
