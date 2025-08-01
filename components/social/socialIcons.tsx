import styled from 'styled-components';
import { Button } from '@heroui/button';
import {
  FacebookIcon,
  InstagramIcon,
  JabberIcon,
  LinkedinIcon,
  TelegramIcon,
  ViberIcon,
  WeChatIcon,
  WhatsappIcon,
} from '@/components/icons';
import { Grid } from '@mui/material';
import { Tooltip } from '@heroui/react';

// Обёртка: 4 колонки, 2 ряда
// const IconsWrapper = styled.div`
//   display: grid;
//   grid-template-columns: repeat(4, 1fr);
//   gap: 16px;
//   width: 100%;
//   max-width: 300px;
//   justify-items: center;
//   align-items: center;
// `;

export const SocialIcons = () => (
  <Grid display={'flex'} flexDirection={'column'} alignItems={'center'}>
    <Grid display={'flex'} alignItems={'center'}>
      <Grid p={0.2}>
        <Tooltip content="Jabber">
          <Button isIconOnly aria-label="Jabber" variant="ghost">
            <JabberIcon />
          </Button>
        </Tooltip>
      </Grid>
      <Grid p={0.2}>
        <Tooltip content="WeChat">
          <Button isIconOnly aria-label="WeChat" variant="ghost">
            <WeChatIcon />
          </Button>
        </Tooltip>
      </Grid>
      <Grid p={0.2}>
        <Tooltip content="Viber">
          <Button isIconOnly aria-label="Viber" variant="ghost">
            <ViberIcon />
          </Button>
        </Tooltip>
      </Grid>
      <Grid p={0.2}>
        <Tooltip content="WhatsApp">
          <Button isIconOnly aria-label="WhatsApp" variant="ghost">
            <WhatsappIcon />
          </Button>
        </Tooltip>
      </Grid>
    </Grid>
    <Grid display={'flex'} alignItems={'center'}>
      <Grid p={0.2}>
        <Tooltip content="Telegram">
          <Button isIconOnly aria-label="Telegram" variant="ghost">
            <TelegramIcon />
          </Button>
        </Tooltip>
      </Grid>
      <Grid p={0.2}>
        <Tooltip content="LinkedIn">
          <Button isIconOnly aria-label="LinkedIn" color="primary">
            <LinkedinIcon />
          </Button>
        </Tooltip>
      </Grid>
      <Grid p={0.2}>
        <Tooltip content="Facebook">
          <Button isIconOnly aria-label="Facebook" color="primary">
            <FacebookIcon />
          </Button>
        </Tooltip>
      </Grid>
      <Grid p={0.2}>
        <Tooltip content="Instagram">
          <Button isIconOnly aria-label="Instagram" variant="bordered">
            <InstagramIcon />
          </Button>
        </Tooltip>
      </Grid>
    </Grid>
  </Grid>
);
