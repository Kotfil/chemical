import { Button } from '@heroui/button';
import {
  FacebookIcon,
  InstagramIcon,
  JabberIcon,
  TelegramIcon,
  ViberIcon,
  WeChatIcon,
  WhatsappIcon,
} from '@/app/components/icon/icons';
import { Grid } from '@mui/material';
import { Tooltip } from '@heroui/react';

export const SocialIcons = () => (
  <Grid display="flex" flexDirection="column" alignItems="center">
    <Grid display="flex" alignItems="center">
      <Grid p={0.2}>
        <Tooltip content="Jabber">
          <a href="https://example.com/jabber" target="_blank" rel="noopener noreferrer">
            <Button isIconOnly aria-label="Jabber" variant="ghost">
              <JabberIcon />
            </Button>
          </a>
        </Tooltip>
      </Grid>
      <Grid p={0.2}>
        <Tooltip content="WeChat">
          <a href="https://example.com/wechat" target="_blank" rel="noopener noreferrer">
            <Button isIconOnly aria-label="WeChat" variant="ghost">
              <WeChatIcon />
            </Button>
          </a>
        </Tooltip>
      </Grid>
      <Grid p={0.2}>
        <Tooltip content="Viber">
          <a href="https://example.com/viber" target="_blank" rel="noopener noreferrer">
            <Button isIconOnly aria-label="Viber" variant="ghost">
              <ViberIcon />
            </Button>
          </a>
        </Tooltip>
      </Grid>
      <Grid p={0.2}>
        <Tooltip content="WhatsApp">
          <a href="https://wa.me/37281547893" target="_blank" rel="noopener noreferrer">
            <Button isIconOnly aria-label="WhatsApp" variant="ghost">
              <WhatsappIcon />
            </Button>
          </a>
        </Tooltip>
      </Grid>
    </Grid>

    <Grid display="flex" alignItems="center">
      <Grid p={0.2}>
        <Tooltip content="Telegram">
          <a href="https://t.me/hksafran" target="_blank" rel="noopener noreferrer">
            <Button isIconOnly aria-label="Telegram" variant="ghost">
              <TelegramIcon />
            </Button>
          </a>
        </Tooltip>
      </Grid>

      <Grid p={0.2} pt={1}>
        <Tooltip content="Facebook">
          <a href="https://facebook.com/example" target="_blank" rel="noopener noreferrer">
            <Button isIconOnly aria-label="Facebook" color="primary">
              <FacebookIcon />
            </Button>
          </a>
        </Tooltip>
      </Grid>

      <Grid p={0.2}>
        <Tooltip content="Instagram">
          <a href="https://instagram.com/example" target="_blank" rel="noopener noreferrer">
            <Button isIconOnly aria-label="Instagram" variant="bordered">
              <InstagramIcon />
            </Button>
          </a>
        </Tooltip>
      </Grid>
    </Grid>
  </Grid>
);
