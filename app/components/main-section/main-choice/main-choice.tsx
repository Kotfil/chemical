import React, { FC } from 'react';
import { Grid } from '@mui/material';
import { MainChoiceQuestions } from '@/app/components/main-section/main-choice/main-choice-questions/main-choice-questions';
import { TitleSection } from '@/app/components/title-section/title-section';

export const MainChoice: FC = () => {
  return (
    <>
      <Grid width={'100%'} display={'flex'} flexDirection={'column'} px={2} pt={2}>
        <Grid>
          <TitleSection>WHY DO CUSTOMERS TRUST US?</TitleSection>
        </Grid>
        <Grid>
          <MainChoiceQuestions />
        </Grid>
      </Grid>
    </>
  );
};
