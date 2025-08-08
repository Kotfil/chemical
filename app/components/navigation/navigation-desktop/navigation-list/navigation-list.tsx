'use client';

import { NavbarItem } from '@heroui/navbar';
import { Grid } from '@mui/material';
import { Link } from '@heroui/link';
import NextLink from 'next/link';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { useTranslation } from '@/app/components/i18n/I18n-context';
import { NavItem } from '@/app/components/navigation/navigation-desktop/navigation-list/navigation-menu.types';

export const NavigationList = () => {
  const t = useTranslation() as any;
  const pathname = usePathname();

  const navItems = t.navigation.navigation_list as NavItem[];

  if (!Array.isArray(navItems)) {
    console.error('navigation_list не массив:', navItems);
    return null;
  }

  return (
    <>
      {navItems.map(item => {
        const isActive = pathname === item.href;
        return (
          <NavbarItem key={item.href}>
            <Grid width="100%">
              <Link
                as={NextLink}
                className={clsx(
                  'text-[clamp(0.875rem,1.5vw,2rem)]',
                  'transition-none',
                  'hover:underline-none',
                  'focus:outline-none',
                  'active:opacity-100',
                  'active:scale-100',
                  isActive ? 'text-primary font-medium' : 'text-foreground',
                )}
                color="primary"
                href={item.href}
              >
                {item.label}
              </Link>
            </Grid>
          </NavbarItem>
        );
      })}
    </>
  );
};
