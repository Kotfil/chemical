import { Grid } from '@mui/material';
import NextLink from 'next/link';
import Image from 'next/image';
import { SocialIcons } from '@/app/components/social/socialIcons';
import { ThemeSwitch } from '@/app/components/styles/theme-switch';
import { Divider } from '@heroui/divider';
import { Navbar as HeroUINavbar, NavbarBrand, NavbarContent, NavbarItem } from '@heroui/navbar';
import { LogoWrapper } from '@/app/components/navigation/navigation.styles';
import { NavigationTitle } from '@/app/components/navigation/navigation-title/navigation-title';
import { NavigationMenu } from '@/app/components/navigation/navigation-menu/navigation-menu';
import { Client18nProvider } from '@/app/components/i18n/client-18n-provider';
import { Localization } from '@/app/components/localization/localization';

export const Navigation = () => {
  return (
    <>
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
                      <NavigationTitle />
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
              <Client18nProvider>
                <NavigationMenu />
              </Client18nProvider>
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
    </>
  );
};
