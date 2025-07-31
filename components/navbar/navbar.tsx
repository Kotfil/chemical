"use client";
import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@heroui/navbar";
import { Link } from "@heroui/link";
import NextLink from "next/link";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import Image from "next/image";
import { LogoWrapper } from "@/components/navbar/navbar.styles";
import { Grid } from "@mui/material";
import clsx from "clsx";
import { Divider } from "@heroui/divider";
import { usePathname } from "next/navigation";
import { Localization } from "@/components/localization/localization";

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <HeroUINavbar maxWidth="xl" position="sticky" height={"4rem (64px)"}>
      <Grid
        display="flex"
        width={"100%"}
        flexDirection={"column"}
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid
          justifyContent="space-between"
          display={"flex"}
          width={"100%"}
          pb={1}
        >
          <Grid>
            <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
              <NavbarBrand as="li" className="gap-3 max-w-fit">
                <NextLink
                  className="flex justify-start items-center gap-1"
                  href="/"
                >
                  <LogoWrapper>
                    <Image
                      src={"/assets/LOGO.png"}
                      alt="Logo"
                      width={120}
                      height={60}
                      priority
                    />
                  </LogoWrapper>
                  <Grid width={"100%"} height={"100%"}>
                    <Grid>
                      <p className="font-bold text-[clamp(1rem,3vw,2.5rem)] leading-tight">
                        HONGKONG SAFRAN INDUSTRY CO. LIMITED.
                      </p>
                    </Grid>
                    <Grid>
                      <p className="mt-1 text-[clamp(0.75rem,2vw,1.25rem)] opacity-80 leading-snug">
                        Flat/RM F 6/F Mega Cube No.8 Wang Kwong Road KL, Hong
                        Kong
                      </p>
                    </Grid>
                    <Grid>
                      <p className="mt-1 text-[clamp(0.75rem,2vw,1.25rem)] opacity-80 leading-snug">
                        Est. 2009
                      </p>
                    </Grid>
                  </Grid>
                </NextLink>
              </NavbarBrand>
            </NavbarContent>
          </Grid>
          <Grid>
            <NavbarContent
              className="hidden sm:flex basis-1/5 sm:basis-full"
              justify="end"
            >
              <NavbarItem className="hidden sm:flex gap-1">
                icons
                {/*<Link*/}
                {/*  isExternal*/}
                {/*  size={"lg"}*/}
                {/*  aria-label="Twitter"*/}
                {/*  href={siteConfig.links.twitter}*/}
                {/*>*/}
                {/*  <TwitterIcon className="text-default-500" />*/}
                {/*</Link>*/}
                {/*<Link*/}
                {/*  isExternal*/}
                {/*  size={"lg"}*/}
                {/*  aria-label="Discord"*/}
                {/*  href={siteConfig.links.discord}*/}
                {/*>*/}
                {/*  <DiscordIcon className="text-default-500" />*/}
                {/*</Link>*/}
                {/*<Link*/}
                {/*  isExternal*/}
                {/*  size={"lg"}*/}
                {/*  aria-label="Github"*/}
                {/*  href={siteConfig.links.github}*/}
                {/*>*/}
                {/*  <GithubIcon className="text-default-500" />*/}
                {/*</Link>*/}
                <ThemeSwitch />
              </NavbarItem>
              <NavbarItem className="hidden lg:flex">
                <Localization />
              </NavbarItem>
              <NavbarItem className="hidden md:flex">ls</NavbarItem>
            </NavbarContent>
          </Grid>
        </Grid>
        <Divider />
        <Grid width={"100%"} alignItems="center" pt={1}>
          <Grid
            display="flex"
            width={"100%"}
            justifyContent="space-around"
            alignItems="center"
          >
            {siteConfig.navItems.map((item) => {
              const isActive = pathname === item.href;
              console.log(pathname, "path");
              return (
                <NavbarItem key={item.href}>
                  <Grid width={"100%"}>
                    <Link
                      as={NextLink}
                      className={clsx(
                        "text-[clamp(0.875rem,1.5vw,2rem)]",
                        "transition-none",
                        "hover:underline-none",
                        "focus:outline-none",
                        "active:opacity-100",
                        "active:scale-100",
                        isActive
                          ? "text-primary font-medium"
                          : "text-foreground",
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
