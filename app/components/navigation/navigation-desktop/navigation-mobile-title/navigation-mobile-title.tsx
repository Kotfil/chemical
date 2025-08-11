import { Grid } from '@mui/material';
import { useTranslation } from '@/app/components/i18n/I18n-context';

export const NavigationTitleTextMobile = () => {
  const t = useTranslation() as any;
  return (
    <>
      <Grid>
        <p className="font-blogger font-bold text-[clamp(0.65rem,2vw,3.70rem)] leading-tight sm:text-[clamp(0.80rem,1.90vw,2.90rem)]">
          {t.navigation.title}
        </p>
      </Grid>
      <Grid>
        <p className="font-blogger mt-1 text-[clamp(0.6rem,1.5vw,1rem)] opacity-80 leading-snug max-w-[50vw] ">
          {t.navigation.subtitle}
        </p>
      </Grid>
      <Grid>
        <p className="font-blogger mt-0.3 text-[clamp(0.6rem,1.5vw,1rem)] opacity-80 leading-snug max-w-[50vw]">
          {t.navigation.subtitle_second}
        </p>
      </Grid>
    </>
  );
};
