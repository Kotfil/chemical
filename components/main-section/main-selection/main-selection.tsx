import React, { FC, useMemo } from 'react';
import { Grid } from '@mui/material';
import { TitleSection } from '@/components/title-section/title-section';
import { SelectionCard } from '@/components/main-section/main-selection/selection-card/selection-card';
import { useTranslation } from 'react-i18next';
import { NavigationItem } from '@/components/navbar/navbar.types';

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
