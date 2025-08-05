import React, { FC } from 'react';
import { Grid } from '@mui/material';
import ProductTable from '@/app/components/products-section/product-table/product-table';

export const ProductsSection: FC = () => {
  return (
    <Grid width={'100%'} display={'flex'} flexDirection={'column'} px={2}>
      <Grid>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4 leading-tight">
          LIST OF OUR PRODUCTS
        </h2>
      </Grid>
      <Grid>
        <ProductTable />
      </Grid>
    </Grid>
  );
};
