import React, { FC } from 'react';
import { Grid } from '@mui/material';
import CooperationSchedule from '@/app/components/cooperation-section/cooperation-schedule/cooperation-schedule';
import { getLocaleDict } from '@/app/i18n-service';
import { Client18nProvider } from '@/app/components/i18n/client-18n-provider';

export const CooperationSection: FC = async () => {
  const { dict } = await getLocaleDict();
  return (
    <Grid width={'100%'} display={'flex'} flexDirection={'column'} px={2}>
      <Grid>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4 leading-tight">
          {dict.cooperation_section.title as string}
        </h2>
      </Grid>
      <Grid>
        <Client18nProvider>
          <CooperationSchedule />
        </Client18nProvider>
      </Grid>
    </Grid>
  );
};
