import '@/styles/globals.css';
import clsx from 'clsx';

import { Providers } from './providers';
import { fontSans } from '@/config/fonts';
import { Navbar } from '@/components/navbar/navbar';
import StyledComponentsRegistry from '@/lib/registry';
import { I18NextLayout } from '@/lib/i18next';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body className={clsx('min-h-screen text-foreground bg-background font-sans antialiased', fontSans.variable)}>
        <I18NextLayout>
          <Providers themeProps={{ attribute: 'class', defaultTheme: 'dark' }}>
            <StyledComponentsRegistry>
              <div className="relative flex flex-col h-screen">
                <Navbar />
                <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">{children}</main>
                <footer className="w-full flex items-center justify-center py-3">
                  {/*<Link*/}
                  {/*  isExternal*/}
                  {/*  className="flex items-center gap-1 text-current"*/}
                  {/*  href="https://heroui.com?utm_source=next-app-template"*/}
                  {/*  title="heroui.com homepage"*/}
                  {/*>*/}
                  {/*  <span className="text-default-600">Powered by</span>*/}
                  {/*  <p className="text-primary">HeroUI</p>*/}
                  {/*</Link>*/}
                </footer>
              </div>
            </StyledComponentsRegistry>
          </Providers>
        </I18NextLayout>
      </body>
    </html>
  );
}
