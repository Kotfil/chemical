'use client';
import { NavbarMenu } from '@heroui/navbar';
import { useTranslation } from '@/app/components/i18n/I18n-context';
import { usePathname } from 'next/navigation';
import { NavigationMenuView } from '@/app/components/navigation/navigation-mobile/navigation-mobile-menu/navigation-menu-view/navigation-menu-view';
import { Grid } from '@mui/material';
import { SocialIcons } from '@/app/components/social/socialIcons';
import { NavigationMobileOption } from '@/app/components/navigation/navigation-mobile/navigation-mobile-menu/navigation-mobile-option/navigation-mobile-option';
import { NavigationMobileMenuProps } from '@/app/components/navigation/navigation-mobile/navigation-mobile-menu/navigation-mobile-menu.types';

export const NavigationMobileMenu = ({ setIsMenuOpen }: NavigationMobileMenuProps) => {
  // const t = useTranslation() as any;
  const pathname = usePathname();
  // const items = t.navigation.navigation_list;

  return (
    <NavbarMenu>
      <Grid>
        <Grid>
          <NavigationMenuView pathname={pathname} items={[]} setIsMenuOpen={setIsMenuOpen} />
        </Grid>
        <Grid display={'flex'} pt={2}>
          <Grid display={'flex'}>
            <Grid>
              <SocialIcons />
            </Grid>
            <Grid display={'flex'} alignItems={'center'}>
              <NavigationMobileOption />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </NavbarMenu>
  );
};
