'use client';
import React from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from '@heroui/react';
import { useTranslation } from '@/app/components/i18n/I18n-context';
import { LogoWrapper } from '@/app/components/navigation/navigation.styles';
import Image from 'next/image';
import { NavigationTitle } from '@/app/components/navigation/navigation-title/navigation-title';
import { NavigationTitleText } from '@/app/components/navigation/navigation-title/navigation-title-text/navigation-title-text';
import { Client18nProvider } from '@/app/components/i18n/client-18n-provider';
import { Grid } from '@mui/material';

export const AcmeLogo = () => {
  return (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default function T() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const t = useTranslation() as any;
  const items = t.navigation.navigation_list;

  return (
    <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="" justify="start">
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
        {items.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={index === 2 ? 'warning' : index === items.length - 1 ? 'danger' : 'foreground'}
              href="#"
              size="lg"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
