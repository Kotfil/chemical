'use client';
import { Navbar as HeroUINavbar, NavbarBrand, NavbarContent, NavbarItem } from '@heroui/navbar';
import { Link } from '@heroui/link';
import NextLink from 'next/link';

import { siteConfig } from '@/config/site';
import { ThemeSwitch } from '@/components/theme-switch';
import Image from 'next/image';
import { LogoWrapper } from '@/components/navbar/navbar.styles';
import { Grid } from '@mui/material';
import clsx from 'clsx';
import { Divider } from '@heroui/divider';
import { usePathname } from 'next/navigation';
import { Localization } from '@/components/localization/localization';
import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';
import { NavigationItem } from '@/components/navbar/navbar.types';
import { SocialIcons } from '@/components/social/socialIcons';

export const Navbar = () => {
  const pathname = usePathname();
  const { t } = useTranslation();

  const navigationListMenu: NavigationItem[] = useMemo(() => {
    const result = t('navigation.navigation_list', { returnObjects: true });
    if (Array.isArray(result)) {
      return result as NavigationItem[];
    }
    console.error('Перевод navigation не является массивом:', result);
    return [];
  }, [t]);

  return (
    <HeroUINavbar maxWidth="xl" position="sticky" height={'4rem (64px)'}>
      <Grid display="flex" width={'100%'} flexDirection={'column'} justifyContent="space-between" alignItems="center">
        <Grid justifyContent="space-between" display={'flex'} width={'100%'} pb={1}>
          <Grid>
            <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
              <NavbarBrand as="li" className="gap-3 max-w-fit">
                <NextLink className="flex justify-start items-center gap-1" href="/">
                  <LogoWrapper>
                    <Image src={'/assets/LOGO.png'} alt="Logo" width={120} height={60} priority />
                  </LogoWrapper>
                  <Grid width={'100%'} height={'100%'}>
                    <Grid>
                      <p className="font-bold text-[clamp(0.45rem,1.54vw,1.15rem)] leading-tight">
                        {t('navigation.title')}
                      </p>
                    </Grid>
                    <Grid>
                      <p className="mt-1 text-[clamp(0.75rem,2vw,1.25rem)] opacity-80 leading-snug">
                        {t('navigation.subtitle')}
                      </p>
                    </Grid>
                    <Grid>
                      <p className="mt-1 text-[clamp(0.75rem,2vw,1.25rem)] opacity-80 leading-snug">
                        {t('navigation.subtitle_second')}
                      </p>
                    </Grid>
                  </Grid>
                </NextLink>
              </NavbarBrand>
            </NavbarContent>
          </Grid>
          <Grid>
            <NavbarContent className="hidden sm:flex basis-1/5 sm:basis-full" justify="end">
              <Grid display={'flex'} justifyContent={'space-between'} width={'100%'} flexDirection={'column'}>
                <Grid pl={2}>
                  <SocialIcons />
                </Grid>
                <Grid display={'flex'} flexDirection={'row'} alignItems={'center'}>
                  <Grid pt={0.5} pr={1}>
                    <ThemeSwitch />
                  </Grid>
                  <Grid pr={1}>
                    <Localization />
                  </Grid>
                  <Grid display={'flex'} flexDirection={'column'} alignItems={'center'}>
                    <Grid>
                      <a href="tel:+37281547893" className="hidden md:flex">
                        <NavbarItem>+372 81 54 78 93</NavbarItem>
                      </a>
                    </Grid>
                    <Grid>
                      <a href="mailto:safran@inventati.org" className="hidden md:flex">
                        <NavbarItem>safran@inventati.org</NavbarItem>
                      </a>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </NavbarContent>
          </Grid>
        </Grid>
        <Divider />
        <Grid width={'100%'} alignItems="center" pt={1}>
          <Grid display="flex" width={'100%'} justifyContent="space-around" alignItems="center">
            {navigationListMenu?.map(item => {
              const isActive = pathname === item.href;
              console.log(pathname, 'path');
              return (
                <NavbarItem key={item.href}>
                  <Grid width={'100%'}>
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
          </Grid>
        </Grid>
      </Grid>

      {/*<NavbarContent className="sm:hidden basis-1 pl-4" justify="end">*/}
      {/*  <Link isExternal aria-label="Github" href={siteConfig.links.github}>*/}
      {/*    <GithubIcon className="text-default-500" />*/}
      {/*  </Link>*/}
      {/*  <ThemeSwitch />*/}
      {/*  <NavbarMenuToggle />*/}
      {/*</NavbarContent>*/}

      {/*<NavbarMenu>*/}

      {/*  <div className="mx-4 mt-2 flex flex-col gap-2">*/}
      {/*    {siteConfig.navMenuItems.map((item, index) => (*/}
      {/*      <NavbarMenuItem key={`${item}-${index}`}>*/}
      {/*        <Link*/}
      {/*          color={*/}
      {/*            index === 2*/}
      {/*              ? "primary"*/}
      {/*              : index === siteConfig.navMenuItems.length - 1*/}
      {/*                ? "danger"*/}
      {/*                : "foreground"*/}
      {/*          }*/}
      {/*          href="#"*/}
      {/*          size="lg"*/}
      {/*        >*/}
      {/*          {item.label}*/}
      {/*        </Link>*/}
      {/*      </NavbarMenuItem>*/}
      {/*    ))}*/}
      {/*  </div>*/}
      {/*</NavbarMenu>*/}
    </HeroUINavbar>
  );
};
