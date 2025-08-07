import React, { FC } from 'react';
import { Grid } from '@mui/material';
import { getLocaleDict } from '@/app/i18n-service';
import AboutSafran from '@/app/components/about-section/about-safran/about-safran';

export const AboutSection: FC = async () => {
  const { dict } = await getLocaleDict();
  return (
    <Grid width={'100%'} display={'flex'} flexDirection={'column'} px={2}>
      <Grid>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4 leading-tight">
          {dict.about_section.title as string}
        </h2>
      </Grid>
      <Grid>
        <AboutSafran />
      </Grid>
    </Grid>
  );
};
