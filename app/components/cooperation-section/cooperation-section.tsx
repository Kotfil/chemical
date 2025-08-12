import React, { FC } from 'react';
import { Grid } from '@mui/material';
import CooperationSchedule from '@/app/components/cooperation-section/cooperation-schedule/cooperation-schedule';
import { getLocaleDict } from '@/app/i18n-service';
import { Client18nProvider } from '@/app/components/i18n/client-18n-provider';
import { TitleSection } from '@/app/components/title-section/title-section';

export const CooperationSection: FC = async () => {
  const { dict } = await getLocaleDict();
  return (
    <Grid width={'100%'} display={'flex'} flexDirection={'column'} px={2}>
      <Grid pb={2} pt={3}>
        <TitleSection color={'#ebcab2'}>{dict.cooperation_section.title as string}</TitleSection>
      </Grid>
      <Grid width={'100%'} alignItems={'center'} display={'flex'}>
        <Client18nProvider>
          <CooperationSchedule />
        </Client18nProvider>
      </Grid>
    </Grid>
  );
};
