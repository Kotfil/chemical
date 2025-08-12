'use client';

import React from 'react';
import { Grid } from '@mui/material';
import { FooterMenuList } from '@/app/components/footer/footer-menu-list/footer-menu-list';
import { Localization } from '@/app/components/localization/localization';
import { ThemeSwitch } from '@/app/components/styles/theme-switch';
import { Client18nProvider } from '@/app/components/i18n/client-18n-provider';

export const Footer = () => {
  return (
    <footer className="w-full py-5 mt-5">
      <Grid container direction="column" justifyContent="center" alignItems="center" spacing={2} px={2}>
        {/*@ts-ignore*/}
        <Grid xs={12} md={'auto'} textAlign="center">
          <div className="font-blogger">
            <div>HONGKONG SAFRAN INDUSTRY CO. LIMITED.</div>
            <div>Flat/RM F 6/F Mega Cube No.8 Wang Kwong Road KL, Hong Kong</div>
            <div>Est. 2009</div>
          </div>
        </Grid>
        {/*@ts-ignore*/}
        <Grid size={12} md={'auto'} container justifyContent="center" alignItems="center">
          <Client18nProvider>
            <FooterMenuList />
          </Client18nProvider>
        </Grid>
        {/*@ts-ignore*/}
        <Grid size={12} md={'auto'} container justifyContent="center" alignItems="center" spacing={1}>
          <Grid>
            <Localization />
          </Grid>
          <Grid>
            <ThemeSwitch />
          </Grid>
        </Grid>
        {/*@ts-ignore*/}
        <Grid size={12} md={'auto'} container direction="column" alignItems="center" spacing={0.5}>
          <Grid>
            <a href="tel:+37281547893" className="">
              +372 81 54 78 93
            </a>
          </Grid>
          <Grid>
            <a href="mailto:safran@inventati.org" className="">
              safran@inventati.org
            </a>
          </Grid>
        </Grid>
      </Grid>
    </footer>
  );
};
