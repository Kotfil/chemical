import { Grid } from "@mui/material";
import { FacebookIcon, LinkedinIcon } from "@/components/button/social-button";
import { Button } from "@heroui/button";

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
