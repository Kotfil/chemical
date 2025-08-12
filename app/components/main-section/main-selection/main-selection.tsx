import React, { FC } from 'react';
import { Grid } from '@mui/material';

import { TitleSection } from '@/app/components/title-section/title-section';
import { SelectionCard } from '@/app/components/main-section/main-selection/main-card/selection-card';
import { getLocaleDict } from '@/app/i18n-service';

export const MainSelection: FC = async () => {
  const { dict } = await getLocaleDict();
  return (
    <>
      <Grid width={'100%'} display={'flex'} flexDirection={'column'} px={2} pt={2}>
        <Grid pb={2} pt={1}>
          <TitleSection color="violet">{dict.main_section.main_selection.title as string}</TitleSection>
        </Grid>
        <Grid>
          <SelectionCard />
        </Grid>
      </Grid>
    </>
  );
};
