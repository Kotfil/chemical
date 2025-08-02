'use client';
import { Navbar as HeroUINavbar, NavbarBrand, NavbarContent, NavbarItem } from '@heroui/navbar';
import NextLink from 'next/link';
import { ThemeSwitch } from '@/components/theme-switch';
import Image from 'next/image';
import { LogoWrapper } from '@/components/navbar/navbar.styles';
import { Grid } from '@mui/material';
import { Divider } from '@heroui/divider';
import { useTranslation } from 'next-i18next';
import { NavbarMenu } from '@/components/navbar/navbar-menu/navbar-menu';
import { Localization } from '@/components/localization/localization';
import { SocialIcons } from '@/components/social/socialIcons';
import { useEffect, useState } from 'react';

export const Navbar = () => {
  const { t } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const title = mounted ? t('navigation.title') : '';
  const subtitle = mounted ? t('navigation.subtitle') : '';
  const subtitleSecond = mounted ? t('navigation.subtitle_second') : '';

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
                      <p className="font-bold text-[clamp(0.45rem,1.54vw,1.15rem)] leading-tight">{title}</p>
                    </Grid>
                    <Grid>
                      <p className="mt-1 text-[clamp(0.75rem,2vw,1.25rem)] opacity-80 leading-snug">{subtitle}</p>
                    </Grid>
                    <Grid>
                      <p className="mt-1 text-[clamp(0.75rem,2vw,1.25rem)] opacity-80 leading-snug">{subtitleSecond}</p>
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
          <Grid
            display="flex"
            width={'100%'}
            justifyContent="space-around"
            alignItems="center"
            suppressHydrationWarning
          >
            <NavbarMenu />
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
