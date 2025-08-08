import React from 'react';
import { NavbarMenuItem, Link } from '@heroui/react';
import NextLink from 'next/link';
import clsx from 'clsx';

type NavigationMobileViewProps = {
  label: string;
  href: string;
  isActive: boolean;
  onClick: () => void;
};

export function NavigationMobileView({ label, href, isActive, onClick }: NavigationMobileViewProps) {
  return (
    <NavbarMenuItem>
      <Link
        as={NextLink}
        className={clsx('w-full', isActive ? 'text-primary font-medium' : 'text-foreground')}
        href={href}
        size="lg"
        onClick={onClick}
      >
        {label}
      </Link>
    </NavbarMenuItem>
  );
}
