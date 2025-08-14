'use client';
import React from 'react';
import { ProductsSection } from '@/app/components/products-section/products-section';
import { Client18nProvider } from '../components/i18n/client-18n-provider';

export default function ProductsPage() {
  return (
    <>
      <Client18nProvider>
        <ProductsSection />
      </Client18nProvider>
    </>
  );
}
