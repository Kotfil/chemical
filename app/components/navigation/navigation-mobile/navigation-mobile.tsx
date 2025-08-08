'use client';
import React from 'react';
import { Navbar, NavbarContent, NavbarMenu, NavbarMenuToggle } from '@heroui/react';
import { useTranslation } from '@/app/components/i18n/I18n-context';
import { LogoWrapper } from '@/app/components/navigation/navigation.styles';
import Image from 'next/image';
import { NavigationTitleText } from '@/app/components/navigation/navigation-title/navigation-title-text/navigation-title-text';
import { Client18nProvider } from '@/app/components/i18n/client-18n-provider';
import { Grid } from '@mui/material';
import { NavigationMobileList } from '@/app/components/navigation/navigation-mobile/navigation-mobile-list/navigation-mobile-list';
import { NavigationMobileOption } from '@/app/components/navigation/navigation-mobile/navigation-mobile-option/navigation-mobile-option';

export default function NavigationMobile() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const t = useTranslation() as any;
  const items = t.navigation.navigation_list;
  return (
    <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} />
      </NavbarContent>
      <NavbarContent className=" sm:flex gap-4" justify="center">
        <Grid display={'flex'} justifyContent={'center'} flexDirection={'column'}>
          <Client18nProvider>
            <NavigationTitleText />
          </Client18nProvider>
        </Grid>
      </NavbarContent>
      <NavbarContent justify="end">
        <LogoWrapper>
          <Image src={'/assets/LOGO.png'} alt="Logo" width={50} height={50} priority />
        </LogoWrapper>
      </NavbarContent>
      <NavbarMenu>
        <Grid>
          <Grid>
            <NavigationMobileList items={items} onItemClick={() => setIsMenuOpen(false)} />
          </Grid>
          <Grid display={'flex'} flexDirection={'column'} width={'100%'} py={1}>
            <NavigationMobileOption />
          </Grid>
        </Grid>
      </NavbarMenu>
    </Navbar>
  );
}
