import { Grid } from '@mui/material';
import { getLocaleDict } from '@/app/i18n-service';
export const dynamic = 'force-dynamic';

export const NavigationTitle = async () => {
  const { dict } = await getLocaleDict();
  return (
    <>
      <Grid>
        <p className="font-bold text-[clamp(0.45rem,1.54vw,1.15rem)] leading-tight">{dict.navigation.title}</p>
      </Grid>
      <Grid>
        <p className="mt-1 text-[clamp(0.75rem,2vw,1.25rem)] opacity-80 leading-snug">{dict.navigation.subtitle}</p>
      </Grid>
      <Grid>
        <p className="mt-1 text-[clamp(0.75rem,2vw,1.25rem)] opacity-80 leading-snug">
          {dict.navigation.subtitle_second}
        </p>
      </Grid>
    </>
  );
};
