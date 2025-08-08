import '@/styles/globals.css';
import clsx from 'clsx';
import { Providers } from './providers';
import { fontSans } from '@/config/fonts';
import StyledComponentsRegistry from '@/lib/styled-components-registry';
import React from 'react';
import { getLocaleDict } from '@/app/i18n-service';
import { Navigation } from '@/app/components/navigation/navigation';

export const metadata = {
  title: 'Chemical',
};

export default async function LocaleLayout({ children }: { children: React.ReactNode }) {
  const { locale } = await getLocaleDict();
  return (
    <html suppressHydrationWarning lang={locale}>
      <head />
      <body className={clsx('min-h-screen text-foreground bg-background font-sans antialiased', fontSans.variable)}>
        <Providers themeProps={{ attribute: 'class', defaultTheme: 'dark' }}>
          <StyledComponentsRegistry>
            <div className="relative flex flex-col h-screen">
              <Navigation />
              <main className="container mx-auto max-w-7xl pt-1 px-6 flex-grow">{children}</main>
              <footer className="w-full flex items-center justify-center py-3" />
            </div>
          </StyledComponentsRegistry>
        </Providers>
      </body>
    </html>
  );
}
