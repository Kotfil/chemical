'use client';
import React, { FC } from 'react';
import { Grid } from '@mui/material';
import ProductTable from '@/app/components/products-section/product-table/product-table';
import { TitleSection } from '@/app/components/title-section/title-section';
import { Client18nProvider } from '@/app/components/i18n/client-18n-provider';
import { useTranslation } from '@/app/components/i18n/I18n-context';

export const ProductsSection: FC = () => {
  const t = useTranslation() as any;
  return (
    <Grid width={'100%'} display={'flex'} flexDirection={'column'} px={2}>
      <Grid pb={3} pt={4}>
        <TitleSection color={'#6ec333'}>{t.product_section.title as string}</TitleSection>
      </Grid>
      <Grid container justifyContent="center" sx={{ width: '100%', overflowX: 'hidden' }}>
        <Grid sx={{ width: '100%', maxWidth: '100%' }} px={5}>
          <Client18nProvider>
            <ProductTable />
          </Client18nProvider>
        </Grid>
      </Grid>
    </Grid>
  );
};
