import { Button } from '@heroui/button';
import { GumletIcon, JabberIcon, SignalIcon, TelegramIcon, WhatsappIcon } from '@/app/components/icon/icons';
import { Grid } from '@mui/material';

export const SocialIcons = () => (
  <Grid display="flex" flexDirection="column" alignItems="center">
    <Grid display="flex" alignItems="center">
      <Grid p={0.2}>
        <a href="https://t.me/hksafran" target="_blank" rel="noopener noreferrer">
          <Button isIconOnly aria-label="Telegram" variant="ghost">
            <TelegramIcon />
          </Button>
        </a>
      </Grid>

      <Grid p={0.2}>
        <a href="https://wa.me/37281547893" target="_blank" rel="noopener noreferrer">
          <Button isIconOnly aria-label="WhatsApp" variant="ghost">
            <WhatsappIcon />
          </Button>
        </a>
      </Grid>
      <Grid p={0.2}>
        <a href="xmpp:safran-hk@xmpp.is" target="_blank" rel="noopener noreferrer">
          <Button isIconOnly aria-label="Jabber" variant="ghost">
            <JabberIcon />
          </Button>
        </a>
      </Grid>
    </Grid>

    <Grid display="flex" alignItems="center">
      <Grid p={0.2} pt={0.7}>
        <a href="https://gumlet.tv/channel/6894505ba5cebfc625e07ab1/" target="_blank" rel="noopener noreferrer">
          <Button isIconOnly aria-label="Gumlet.Tv" variant="bordered">
            <GumletIcon />
          </Button>
        </a>
      </Grid>
      <Grid p={0.2}>
        <a href="https://signal.me/#P+37281547893" target="_blank" rel="noopener noreferrer">
          <Button isIconOnly aria-label="Signal" variant="bordered">
            <SignalIcon />
          </Button>
        </a>
      </Grid>
    </Grid>
  </Grid>
);
