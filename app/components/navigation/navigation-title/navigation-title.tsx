import { Grid } from '@mui/material';
import { NavbarBrand, NavbarContent } from '@heroui/navbar';
import NextLink from 'next/link';
import { LogoWrapper } from '@/app/components/navigation/navigation.styles';
import Image from 'next/image';
import { Client18nProvider } from '@/app/components/i18n/client-18n-provider';
import { NavigationTitleText } from '@/app/components/navigation/navigation-title/navigation-title-text/navigation-title-text';

export const NavigationTitle = () => {
  return (
    <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
      <NavbarBrand as="li" className="gap-3 max-w-fit">
        <NextLink className="flex justify-start items-center gap-1" href="/">
          <LogoWrapper>
            <Image src={'/assets/LOGO.png'} alt="Logo" width={120} height={60} priority />
          </LogoWrapper>
          <Grid width={'100%'} height={'100%'}>
            <Client18nProvider>
              <NavigationTitleText />
            </Client18nProvider>
          </Grid>
        </NextLink>
      </NavbarBrand>
    </NavbarContent>
  );
};
