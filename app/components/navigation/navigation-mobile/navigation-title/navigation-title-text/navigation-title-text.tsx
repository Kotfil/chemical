import { Grid } from '@mui/material';
import { useTranslation } from '@/app/components/i18n/I18n-context';

export const NavigationTitleText = () => {
  const t = useTranslation() as any;
  return (
    <>
      <Grid>
        <p className="font-blogger font-bold text-[clamp(0.63rem,2.16vw,1.61rem)] leading-tight">
          {t.navigation.title}
        </p>
      </Grid>
      <Grid>
        <p className="font-blogger mt-1 text-[clamp(0.84rem,2.24vw,1.4rem)] opacity-80 leading-snug">
          {t.navigation.subtitle}
        </p>
      </Grid>
      <Grid>
        <p className="font-blogger mt-1 text-[clamp(0.84rem,2.24vw,1.4rem)] opacity-80 leading-snug">
          {t.navigation.subtitle_second}
        </p>
      </Grid>
    </>
  );
};
