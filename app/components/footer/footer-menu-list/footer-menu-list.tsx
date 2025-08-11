import { Grid } from '@mui/material';
import { Link } from '@heroui/link';
import NextLink from 'next/link';
import clsx from 'clsx';
import React from 'react';
import { NavItem } from '@/app/components/navigation/navigation-desktop/navigation-list/navigation-menu.types';
import { useTranslation } from '@/app/components/i18n/I18n-context';

export const FooterMenuList = () => {
  const t = useTranslation() as any;

  const navItems = t.navigation.navigation_list as NavItem[];

  if (!Array.isArray(navItems)) {
    console.error('navigation_list не массив:', navItems);
    return null;
  }
  return (
    <>
      {navItems.map(item => {
        return (
          <div key={item.href} style={{}}>
            <Grid px={1}>
              <Link
                as={NextLink}
                className={`font-blogger ${clsx(
                  'text-[clamp(1rem,2vw,3rem)]',
                  'transition-none',
                  'hover:underline-none',
                  'focus:outline-none',
                  'active:opacity-100',
                  'active:scale-100',
                  'text-foreground font-blogger',
                )}`}
                color="primary"
                href={item.href}
              >
                {item.label}
              </Link>
            </Grid>
          </div>
        );
      })}
    </>
  );
};
