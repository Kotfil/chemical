import { Grid } from '@mui/material';
import { Divider } from '@heroui/divider';
import { Client18nProvider } from '@/app/components/i18n/client-18n-provider';
import { SocialIcons } from '@/app/components/social/socialIcons';
import { NavigationTitle } from '@/app/components/navigation/navigation-title/navigation-title';
import { Navbar as HeroUINavbar, NavbarContent } from '@heroui/navbar';
import { NavigationList } from '@/app/components/navigation/navigation-desktop/navigation-list/navigation-list';
import { NavigationOption } from '@/app/components/navigation/navigation-desktop/navigation-option/navigation-option';

export const NavigationDesktop = () => {
  return (
    <>
      <HeroUINavbar maxWidth="xl" position="sticky" height={'4rem (64px)'}>
        <Grid display="flex" width={'100%'} flexDirection={'column'} justifyContent="space-between" alignItems="center">
          <Grid justifyContent="space-between" display={'flex'} width={'100%'} pb={1}>
            <Grid>
              <NavigationTitle />
            </Grid>
            <Grid>
              <NavbarContent className="hidden sm:flex basis-1/5 sm:basis-full" justify="end">
                <Grid display={'flex'} justifyContent={'space-between'} width={'100%'} flexDirection={'column'}>
                  <Grid pl={2}>
                    <SocialIcons />
                  </Grid>
                  <Grid display={'flex'} flexDirection={'row'} alignItems={'center'}>
                    <NavigationOption />
                  </Grid>
                </Grid>
              </NavbarContent>
            </Grid>
          </Grid>
          <Divider />
          <Grid width={'100%'} alignItems="center" pt={1}>
            <Grid
              display="flex"
              width={'100%'}
              justifyContent="space-around"
              alignItems="center"
              suppressHydrationWarning
            >
              <Client18nProvider>
                <NavigationList />
              </Client18nProvider>
            </Grid>
          </Grid>
        </Grid>
      </HeroUINavbar>
    </>
  );
};
