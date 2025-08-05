import React, { FC } from 'react';
import { Grid } from '@mui/material';
import { Divider } from '@heroui/divider';
import { SubtitleSection } from '@/app/components/subtitle-section/subtitle-section';

export const MainChoiceQuestions: FC = () => {
  return (
    <>
      <Divider />
      <Grid pt={2}>
        <Grid>
          <SubtitleSection>
            (1) We are approved by the National Defense Department to have accesses to export excellent quality
            explosives material to mining, quarrying and construction industries.
          </SubtitleSection>
        </Grid>
        <Grid>
          <SubtitleSection>
            (2) We are a registered international trade agent enterprise in Ministry of Commerce of China.
          </SubtitleSection>
        </Grid>
        <Grid>
          <SubtitleSection>
            (3) We are an executive director membership of China Import and Export Association.
          </SubtitleSection>
        </Grid>
        <Grid>
          <SubtitleSection>
            (4) We are warded by China Import and Export Association with 3A’s credibility in latest consecutive 4
            years.
          </SubtitleSection>
        </Grid>
      </Grid>
      <Divider />
    </>
  );
};
