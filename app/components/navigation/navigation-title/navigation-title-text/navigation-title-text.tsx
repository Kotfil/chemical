import { Grid } from '@mui/material';
import { useTranslation } from '@/app/components/i18n/I18n-context';

export const NavigationTitleText = () => {
  const t = useTranslation() as any;
  return (
    <>
      <Grid>
        <p className="font-bold text-[clamp(0.45rem,1.54vw,1.15rem)] leading-tight">{t.navigation.title}</p>
      </Grid>
      <Grid>
        <p className="mt-1 text-[clamp(0.6rem,1.6vw,1rem)] opacity-80 leading-snug">{t.navigation.subtitle}</p>
      </Grid>
      <Grid>
        <p className="mt-1 text-[clamp(0.6rem,1.6vw,1rem)] opacity-80 leading-snug">{t.navigation.subtitle_second}</p>
      </Grid>
    </>
  );
};
