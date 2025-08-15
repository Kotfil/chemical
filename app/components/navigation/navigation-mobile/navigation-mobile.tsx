'use client';
import React from 'react';
import { Navbar, NavbarContent, NavbarMenu, NavbarMenuToggle } from '@heroui/react';
import { useTranslation } from '@/app/components/i18n/I18n-context';
import { LogoWrapper } from '@/app/components/navigation/navigation.styles';
import Image from 'next/image';
import { Client18nProvider } from '@/app/components/i18n/client-18n-provider';
import { Grid } from '@mui/material';
import { NavigationMobileList } from '@/app/components/navigation/navigation-mobile/navigation-mobile-list/navigation-mobile-list';
import { NavigationMobileOption } from '@/app/components/navigation/navigation-mobile/navigation-mobile-option/navigation-mobile-option';
import { NavigationTitleTextMobile } from '@/app/components/navigation/navigation-desktop/navigation-mobile-title/navigation-mobile-title';
import styled from 'styled-components';

const CustomNavbarMenuToggle = styled(NavbarMenuToggle)`
  background-color: transparent;
  border: 2px solid transparent;
  border-radius: 8px;
  padding: 8px;
  cursor: pointer;
  transition: all 0.2s ease;

  &[data-open='true'] {
    transform: rotate(90deg);
  }

  &[data-pressed='true'] {
    background-color: rgba(0, 0, 0, 0.1);
  }

  &[data-hover='true'] {
    background-color: rgba(0, 0, 0, 0.05);
  }

  &[data-focus-visible='true'] {
    outline: 2px solid #007aff;
  }
`;

export default function NavigationMobile() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const t = useTranslation() as any;
  const items = t.navigation.navigation_list;
  return (
    <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent justify="start">
        <CustomNavbarMenuToggle aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} />
      </NavbarContent>

      <NavbarContent className=" sm:flex gap-4" justify="center">
        <Grid display={'flex'} justifyContent={'center'} flexDirection={'column'}>
          <Client18nProvider>
            <NavigationTitleTextMobile />
          </Client18nProvider>
        </Grid>
      </NavbarContent>

      <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
        <LogoWrapper>
          <Image src="/assets/LOGO.png" alt="Logo" width={50} height={50} priority />
        </LogoWrapper>
      </div>

      <NavbarMenu>
        <Grid>
          <Grid>
            <NavigationMobileList items={items} onItemClick={() => setIsMenuOpen(false)} />
          </Grid>
          <Grid display={'flex'} flexDirection={'column'} width={'100%'} pb={1} pt={2}>
            <NavigationMobileOption />
          </Grid>
        </Grid>
      </NavbarMenu>
    </Navbar>
  );
}
