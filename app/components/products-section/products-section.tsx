import React, { FC } from 'react';
import { Grid } from '@mui/material';
import ProductTable from '@/app/components/products-section/product-table/product-table';
import { getLocaleDict } from '@/app/i18n-service';
import { TitleSection } from '@/app/components/title-section/title-section';

export const ProductsSection: FC = async () => {
  const { dict } = await getLocaleDict();
  return (
    <Grid width={'100%'} display={'flex'} flexDirection={'column'} px={2}>
      <Grid>
        <TitleSection>{dict.product_section.title as string}</TitleSection>
      </Grid>
      <Grid>
        <ProductTable />
      </Grid>
    </Grid>
  );
};
