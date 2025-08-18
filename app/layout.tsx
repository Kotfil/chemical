import '@/styles/globals.css';
import clsx from 'clsx';
import { Providers } from './providers';
import StyledComponentsRegistry from '@/lib/styled-components-registry';
import React from 'react';
import { getLocaleDict } from '@/app/i18n-service';
import { Navigation } from '@/app/components/navigation/navigation';
import localFont from 'next/font/local';
import { Footer } from '@/app/components/footer/footer';

const bloggerSans = localFont({
  src: [
    { path: '../public/font/blogger/blogger-sans.regular.ttf', weight: '400', style: 'normal' },
    { path: '../public/font/blogger/blogger-sans.italic.ttf', weight: '400', style: 'italic' },
  ],
  variable: '--font-blogger',
  display: 'swap',
});

export const metadata = {
  title: 'Chemical',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/assets/LOGO.png',
  },
};

export default async function LocaleLayout({ children }: { children: React.ReactNode }) {
  const { locale } = await getLocaleDict();
  return (
    <html suppressHydrationWarning lang={locale}>
      <head>
        <title>{metadata.title}</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/LOGO.png" />
        <meta name="description" content="Chemical app description" />
      </head>
      <body className={clsx('min-h-screen text-foreground bg-background font-sans antialiased', bloggerSans.variable)}>
        <Providers themeProps={{ attribute: 'class', defaultTheme: 'dark' }}>
          <StyledComponentsRegistry>
            <div className="relative flex flex-col h-screen">
              <Navigation />
              <main className="container mx-auto max-w-7xl pt-1 px-1.5 flex-grow">{children}</main>
              <Footer />
            </div>
          </StyledComponentsRegistry>
        </Providers>
      </body>
    </html>
  );
}
