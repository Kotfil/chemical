import { Grid } from '@mui/material';
import { NavbarItem } from '@heroui/navbar';

export const NavigationContact = () => {
  return (
    <>
      <Grid>
        <a href="tel:+37281547893" className="">
          <NavbarItem>+372 81 54 78 93</NavbarItem>
        </a>
      </Grid>
      <Grid>
        <a href="mailto:safran@inventati.org" className="">
          <NavbarItem>safran@inventati.org</NavbarItem>
        </a>
      </Grid>
    </>
  );
};
