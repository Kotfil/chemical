'use client';
import { NavbarMenuItem } from '@heroui/navbar';
import { Link } from '@heroui/link';
import NextLink from 'next/link';
import clsx from 'clsx';
import { siteConfig } from '@/config/site';
import { NavigationMenuViewProps } from '@/app/components/navigation/navigation-mobile/navigation-mobile-menu/navigation-menu-view/navigation-menu-view.types';

export const NavigationMenuView = ({ pathname, items, setIsMenuOpen }: NavigationMenuViewProps) => {
  return (
    <div className="mx-4 mt-1 flex flex-col gap-2">
      {items.map((item, index) => {
        const isActive = pathname === item.href;
        return (
          <NavbarMenuItem key={`${item.href}-${index}`}>
            <Link
              className={clsx(isActive ? 'text-primary font-medium' : 'text-foreground')}
              as={NextLink}
              color={index === 2 ? 'primary' : index === siteConfig.navMenuItems.length - 1 ? 'danger' : 'foreground'}
              href={item.href}
              size="lg"
              onClick={() => setIsMenuOpen?.(false)}
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        );
      })}
    </div>
  );
};
