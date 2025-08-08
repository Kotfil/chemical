import { Grid } from '@mui/material';
import { ThemeSwitch } from '@/app/components/styles/theme-switch';
import { Localization } from '@/app/components/localization/localization';
import { NavigationContact } from '@/app/components/navigation/navigation-desktop/navigation-contact/navigation-contact';

export const NavigationMobileOption = () => {
  return (
    <Grid>
      <Grid display="flex" alignItems="center" justifyContent="space-around" pb={1}>
        <Grid pt={0.5} pr={1}>
          <ThemeSwitch />
        </Grid>
        <Grid pr={1}>
          <Localization />
        </Grid>
      </Grid>
      <Grid display={'flex'} flexDirection={'column'} alignItems={'center'}>
        <NavigationContact />
      </Grid>
    </Grid>
  );
};
