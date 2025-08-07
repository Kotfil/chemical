import React, { FC } from 'react';
import { Grid } from '@mui/material';
import { MainChoiceQuestions } from '@/app/components/main-section/main-choice/main-choice-questions/main-choice-questions';
import { TitleSection } from '@/app/components/title-section/title-section';
import { getLocaleDict } from '@/app/i18n-service';

export const MainChoice: FC = async () => {
  const { dict } = await getLocaleDict();
  return (
    <>
      <Grid width={'100%'} display={'flex'} flexDirection={'column'} px={2} pt={2}>
        <Grid>
          <TitleSection>{dict.main_section.main_choice.title as string}</TitleSection>
        </Grid>
        <Grid>
          <MainChoiceQuestions />
        </Grid>
      </Grid>
    </>
  );
};
