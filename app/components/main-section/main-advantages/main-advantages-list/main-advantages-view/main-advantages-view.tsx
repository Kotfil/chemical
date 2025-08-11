import { Grid } from '@mui/material';
import { SubtitleSection } from '@/app/components/subtitle-section/subtitle-section';
import React from 'react';
import { AdvantageItem } from '../main-advantages-list.types';

export const MainAdvantagesView = ({ item }: { item: AdvantageItem }) => {
  return (
    <>
      <Grid pt={0.2}>
        <SubtitleSection>{`(${item.id}) ${item.text}`}</SubtitleSection>
      </Grid>
    </>
  );
};
