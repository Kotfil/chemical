import React, { FC } from 'react';
import { Grid } from '@mui/material';
import { getLocaleDict } from '@/app/i18n-service';
import AboutSafran from '@/app/components/about-section/about-safran/about-safran';
import { TitleSection } from '@/app/components/title-section/title-section';

export const AboutSection: FC = async () => {
  const { dict } = await getLocaleDict();
  const fullTitle = dict.about_section.title as string;

  const [mainTitle, subTitle] = fullTitle.split(':', 2);

  return (
    <Grid width="100%" display="flex" flexDirection="column" px={2}>
      <Grid pb={2} pt={4}>
        <TitleSection color={'#f25b9e'}>{mainTitle.trim()}</TitleSection>
        {subTitle && <TitleSection color={'#f25b9e'}>{subTitle.trim()}</TitleSection>}
      </Grid>
      <Grid>
        <AboutSafran />
      </Grid>
    </Grid>
  );
};
