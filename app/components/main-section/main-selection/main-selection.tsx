import React, { FC } from 'react';
import { Grid } from '@mui/material';

import { TitleSection } from '@/app/components/title-section/title-section';
import { SelectionCard } from '@/app/components/main-section/main-selection/main-card/selection-card';

export const MainSelection: FC = () => {
  return (
    <>
      <Grid width={'100%'} display={'flex'} flexDirection={'column'} px={2} pt={2}>
        <Grid>
          <TitleSection>WHY CHOOSE US?</TitleSection>
        </Grid>
        <Grid>
          <SelectionCard />
        </Grid>
      </Grid>
    </>
  );
};
