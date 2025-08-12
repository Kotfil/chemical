import { getLocaleDict } from '@/app/i18n-service';
import { Grid } from '@mui/material';
import { TitleSection } from '@/app/components/title-section/title-section';
import React from 'react';
import { MainAdvantagesList } from '@/app/components/main-section/main-advantages/main-advantages-list/main-advantages-list';

export const MainAdvantages = async () => {
  const { dict } = await getLocaleDict();
  return (
    <>
      <Grid width={'100%'} display={'flex'} flexDirection={'column'} px={2} pt={4}>
        <Grid pb={2}>
          <TitleSection color="#64aafa">{dict.main_section.main_choice.title as string}</TitleSection>
        </Grid>
        <Grid>
          <MainAdvantagesList />
        </Grid>
      </Grid>
    </>
  );
};
