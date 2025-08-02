'use client';
import React, { FC } from 'react';
import { Grid } from '@mui/material';
import { TitleSection } from '@/components/title-section/title-section';

import dynamic from 'next/dynamic';
import { Skeleton } from '@heroui/react';

const SelectionCard = dynamic(
  () =>
    import('@/components/main-section/main-selection/selection-card/selection-card').then(mod => ({
      default: mod.SelectionCard,
    })),
  {
    ssr: false,
    loading: () => <Skeleton />,
  },
);

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
