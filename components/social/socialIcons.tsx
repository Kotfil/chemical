import { Grid } from "@mui/material";
import { Button } from "@heroui/button";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TelegramIcon,
} from "@/components/icons";

export const SocialIcons = () => (
  <>
    <Grid size={3} px={0.4}>
      <Button isIconOnly aria-label="Telegram" variant={"ghost"}>
        <TelegramIcon />
      </Button>
    </Grid>
    <Grid size={3} px={0.4}>
      <Button isIconOnly aria-label="LinkedIn" color="primary">
        <LinkedinIcon />
      </Button>
    </Grid>
    <Grid size={3} px={0.4}>
      <Button isIconOnly aria-label="Facebook" color="primary">
        <FacebookIcon />
      </Button>
    </Grid>
    <Grid size={3} px={0.4}>
      <Button isIconOnly aria-label="Instagram" variant={"bordered"}>
        <InstagramIcon />
      </Button>
    </Grid>
  </>
);
