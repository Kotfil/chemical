import React, { FC } from 'react';
import { Grid } from '@mui/material';
import { Divider } from '@heroui/divider';
import { SubtitleSection } from '@/app/components/subtitle-section/subtitle-section';
import { getLocaleDict } from '@/app/i18n-service';
import { MainChoice } from '@/app/components/main-section/main-choice/main-choice-questions/main-choice-questions.types';

export const MainChoiceQuestions: FC = async () => {
  const { dict } = await getLocaleDict();
  const main_choice_list = dict.main_section.main_choice.main_choice_list as MainChoice[];
  return (
    <>
      <Divider />
      <Grid pt={2}>
        {main_choice_list.map((item, idx) => {
          return (
            <Grid key={idx}>
              <SubtitleSection>{`(${item.id}) ${item.text}`}</SubtitleSection>
            </Grid>
          );
        })}
      </Grid>
      <Divider />
    </>
  );
};
