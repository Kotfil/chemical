'use client';
import React from 'react';
import { Grid } from '@mui/material';
import { usePathname } from 'next/navigation';
import { NavigationMobileView } from '@/app/components/navigation/navigation-mobile/navigation-mobile-list/navigation-mobile-view/navigation-mobile-view';

type NavigationMobileListProps = {
  items: { label: string; href: string }[];
  onItemClick: () => void;
};

export function NavigationMobileList({ items, onItemClick }: NavigationMobileListProps) {
  const pathname = usePathname();

  return (
    <Grid>
      {items.map((item, index) => (
        <NavigationMobileView
          key={`${item.href}-${index}`}
          label={item.label}
          href={item.href}
          isActive={pathname === item.href}
          onClick={onItemClick}
        />
      ))}
    </Grid>
  );
}
