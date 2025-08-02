'use client';

import { FC, useMemo, useState, useEffect } from 'react';
import { NavbarItem } from '@heroui/navbar';
import { Grid } from '@mui/material';
import { Link } from '@heroui/link';
import NextLink from 'next/link';
import clsx from 'clsx';
import { NavigationItem } from '@/components/navbar/navbar.types';
import { useTranslation } from 'next-i18next';
import { usePathname } from 'next/navigation';

export const NavbarMenu: FC = () => {
  const { t } = useTranslation();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navigationListMenu: NavigationItem[] = useMemo(() => {
    const result = t('navigation.navigation_list', { returnObjects: true });
    if (Array.isArray(result)) return result;
    console.error('navigation_list не массив:', result);
    return [];
  }, [t]);

  if (!mounted) return null;

  return (
    <>
      {navigationListMenu.map(item => {
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
