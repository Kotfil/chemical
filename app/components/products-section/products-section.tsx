import React, { FC } from 'react';
import { Grid } from '@mui/material';
import ProductTable from '@/app/components/products-section/product-table/product-table';
import { getLocaleDict } from '@/app/i18n-service';

export const ProductsSection: FC = async () => {
  const { dict } = await getLocaleDict();
  return (
    <Grid width={'100%'} display={'flex'} flexDirection={'column'} px={2}>
      <Grid>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4 leading-tight">
          {dict.product_section.title as string}
        </h2>
      </Grid>
      <Grid>
        <ProductTable />
      </Grid>
    </Grid>
  );
};
