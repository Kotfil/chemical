import React, { FC } from 'react';
import { Grid } from '@mui/material';
import { getLocaleDict } from '@/app/i18n-service';
import AboutSafran from '@/app/components/about-section/about-safran/about-safran';
import { TitleSection } from '@/app/components/title-section/title-section';

export const AboutSection: FC = async () => {
  const { dict } = await getLocaleDict();
  return (
    <Grid width={'100%'} display={'flex'} flexDirection={'column'} px={2}>
      <Grid>
        <TitleSection> {dict.about_section.title as string}</TitleSection>
      </Grid>
      <Grid>
        <AboutSafran />
      </Grid>
    </Grid>
  );
};
