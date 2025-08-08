'use client';
import useMediaQuery from '@mui/material/useMediaQuery';
import React, { useMemo } from 'react';
import { NavigationMobile } from '@/app/components/navigation/navigation-mobile/navigation-mobile';
import { NavigationDesktop } from '@/app/components/navigation/navigation-desktop/navigation-desktop';
import T from '@/app/components/navigation/t';
import { Client18nProvider } from '@/app/components/i18n/client-18n-provider';

export const Navigation = () => {
  const isDesktop = useMediaQuery('(min-width: 820px)');

  return useMemo(() => {
    // return isDesktop ? <NavigationDesktop /> : <NavigationMobile />;
    return isDesktop ? (
      <NavigationDesktop />
    ) : (
      <Client18nProvider>
        <T />
      </Client18nProvider>
    );
  }, [isDesktop]);
};
