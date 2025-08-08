export type NavigationMenuViewProps = {
  pathname: string;
  items: { href: string; label: string }[];
  setIsMenuOpen?: (value: boolean) => void;
};
