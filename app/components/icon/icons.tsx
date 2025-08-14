import * as React from 'react';

import { IconSvgProps } from '@/types';

export const JabberIcon = ({
  fill = '#FFA500', // оранжевый, часто ассоциируемый с XMPP/Jabber
  size = 22,
  height = 12,
  width = 12,
  ...props
}) => {
  return (
    <svg
      height={size || height || 24}
      width={size || width || 24}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill={fill}
        d="M32 6C17.6 6 6 16.3 6 29c0 6.4 3.2 12.1 8.4 16.2L12 58l9.5-5.1C25 54.1 28.4 55 32 55c14.4 0 26-10.3 26-23S46.4 6 32 6z"
      />
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="central"
        fontSize="20"
        fontWeight="bold"
        fill="#fff"
        fontFamily="Arial, sans-serif"
      >
        J
      </text>
      <path
        d="M32 6C17.6 6 6 16.3 6 29c0 6.4 3.2 12.1 8.4 16.2L12 58l9.5-5.1C25 54.1 28.4 55 32 55c14.4 0 26-10.3 26-23S46.4 6 32 6z"
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </svg>
  );
};

export const WeChatIcon = ({
  fill = '#7BB32E', // фирменный зелёный цвет WeChat
  size = 22,
  height = 12,
  width = 12,
  ...props
}) => {
  return (
    <svg
      height={size || height || 24}
      width={size || width || 24}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill={fill}
        d="M32 6C17.6 6 6 16.3 6 29c0 6.4 3.2 12.1 8.4 16.2L12 58l9.5-5.1C25 54.1 28.4 55 32 55c14.4 0 26-10.3 26-23S46.4 6 32 6z"
      />
      <path
        d="M22 27a3 3 0 110-6 3 3 0 010 6zm10 0a3 3 0 110-6 3 3 0 010 6zm6 14a3 3 0 110-6 3 3 0 010 6zm10 0a3 3 0 110-6 3 3 0 010 6z"
        fill="#fff"
      />
      <path
        d="M32 6C17.6 6 6 16.3 6 29c0 6.4 3.2 12.1 8.4 16.2L12 58l9.5-5.1C25 54.1 28.4 55 32 55c14.4 0 26-10.3 26-23S46.4 6 32 6z"
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </svg>
  );
};

export const ViberIcon = ({
  fill = '#7360F2', // фирменный цвет Viber
  size = 22,
  height = 12,
  width = 12,
  ...props
}) => {
  return (
    <svg
      height={size || height || 24}
      width={size || width || 24}
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill={fill}
        d="M391.6 351.6c-14.3 0-41.5-12.1-77.6-38.3-31.1-22.8-52.2-49.2-68.6-83.3-13.2-27.2-15.6-47.5-15.9-53.4-.4-5.6 3.8-10.5 9.4-11.3l49.5-7c5.1-.7 10.1 1.8 12.3 6.5l21.5 47.1c1.9 4.2.7 9.1-2.8 12.1l-18.5 15.6c6.5 13.7 16.5 26.8 29.3 38.1 13.4 11.8 27.4 19.6 40.3 22.8l14.3-18.2c2.8-3.6 7.7-5 12.1-3.4l51 18.8c4.9 1.8 8.2 6.5 7.9 11.7-.3 5.8-3.5 23.2-25.5 44.3-14.4 13.9-32.8 21.1-53.1 21.1z"
      />
      <path
        d="M256 0C114.6 0 0 99.7 0 222.5c0 56.3 25.4 108.8 67.2 147.5V512l98.4-53.9c28.1 8 58.1 12.5 90.4 12.5 141.4 0 256-99.7 256-222.5S397.4 0 256 0z"
        fill={fill}
      />
      <path
        d="M315.2 139.4c0 6.7-5.4 12.1-12.1 12.1s-12.1-5.4-12.1-12.1c0-12.5-10.2-22.7-22.7-22.7s-22.7 10.2-22.7 22.7c0 6.7-5.4 12.1-12.1 12.1s-12.1-5.4-12.1-12.1c0-26 21.2-47.2 47.2-47.2s47.2 21.2 47.2 47.2z"
        fill="#fff"
      />
      <path
        d="M322.6 204.5c-6.7 0-12.1-5.4-12.1-12.1 0-27.9-22.7-50.6-50.6-50.6s-50.6 22.7-50.6 50.6c0 6.7-5.4 12.1-12.1 12.1s-12.1-5.4-12.1-12.1c0-41.6 33.9-75.4 75.4-75.4s75.4 33.9 75.4 75.4c.1 6.7-5.3 12.1-12.1 12.1z"
        fill="#fff"
      />
    </svg>
  );
};

export const WhatsappIcon = ({
  fill = '#25D366', // фирменный цвет WhatsApp
  size = 22,
  height = 12,
  width = 12,
  ...props
}) => {
  return (
    <svg
      height={size || height || 24}
      width={size || width || 24}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill={fill}
        d="M16.004 3C9.38 3 4 8.38 4 15c0 2.671.989 5.118 2.621 7.026L4 29l7.237-2.58A11.96 11.96 0 0 0 16.004 27C22.624 27 28 21.62 28 15S22.624 3 16.004 3z"
      />
      <path
        d="M16.004 3C9.38 3 4 8.38 4 15c0 2.671.989 5.118 2.621 7.026L4 29l7.237-2.58A11.96 11.96 0 0 0 16.004 27C22.624 27 28 21.62 28 15S22.624 3 16.004 3z"
        fill="none"
        stroke="#ffffff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        fill="#fff"
        d="M21.1 18.3c-.3-.2-1.8-.9-2-1s-.5-.2-.7.2c-.3.4-.8 1-1 1.1-.2.1-.4.1-.7 0-.3-.2-1.1-.4-2-1.2s-1.4-1.8-1.5-2.1c-.1-.3 0-.4.1-.6.2-.2.3-.3.5-.5.2-.2.2-.3.3-.5s.1-.3 0-.5c-.1-.2-.7-1.7-.9-2.3-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4s-1 1-1 2.4 1 2.8 1.2 3c.2.2 2 3.2 5 4.4 2.9 1.2 2.9.8 3.4.7.5-.1 1.7-.7 1.9-1.3.2-.6.2-1.2.1-1.3z"
      />
    </svg>
  );
};

export const SignalIcon = ({
  fill = '#3A76F0', // фирменный цвет Signal
  size = 22,
  height = 12,
  width = 12,
  ...props
}) => {
  return (
    <svg
      height={size || height || 24}
      width={size || width || 24}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill={fill}
        d="M12 2C6.48 2 2 6.48 2 12c0 2.21.72 4.25 1.93 5.9L2 22l4.1-1.93C7.75 21.28 9.79 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm1.5 13h-3v-3h3v3zm0-4.5h-3v-3h3v3z"
      />
      <path
        d="M12 2C6.48 2 2 6.48 2 12c0 2.21.72 4.25 1.93 5.9L2 22l4.1-1.93C7.75 21.28 9.79 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z"
        fill="none"
        stroke="#ffffff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </svg>
  );
};

export const TelegramIcon = ({
  fill = '#229ED9', // фирменный цвет Telegram
  size = 22,
  height = 12,
  width = 12,
  ...props
}) => {
  return (
    <svg
      height={size || height || 24}
      width={size || width || 24}
      viewBox="0 0 28 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fill={fill} d="M21 3L3 10.5l6.25 2.25L18 6l-7.5 9v3l3-2.25 4.5 3.75L21 3z" />
      <path
        d="M21 3L3 10.5l6.25 2.25L18 6l-7.5 9v3l3-2.25 4.5 3.75L21 3z"
        fill="none"
        stroke="#ffffff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </svg>
  );
};

export const GumletIcon = ({
  size = 50,
  colors = ['#FF6C37', '#FF5B2B', '#E14A1F', '#B93816'], // оттенки оранжевого
  ...props
}: {
  size?: number;
  colors?: string[];
} & React.SVGProps<SVGSVGElement>) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <defs>
      <linearGradient id="gumlet-gradient" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor={colors[0]} />
        <stop offset="33%" stopColor={colors[1]} />
        <stop offset="66%" stopColor={colors[2]} />
        <stop offset="100%" stopColor={colors[3]} />
      </linearGradient>
    </defs>
    <rect width="64" height="64" rx="12" fill="url(#gumlet-gradient)" />
    <path
      d="M32.6 18.7c-6.2 0-11.3 5-11.3 11.3 0 6.2 5 11.3 11.3 11.3 4.8 0 9.1-3 10.6-7.3H37.1c-0.7 1.4-2.1 2.3-3.8 2.3-2.4 0-4.3-2-4.3-4.3s2-4.3 4.3-4.3c1.7 0 3.1 0.9 3.8 2.3h6.1c-1.4-4.3-5.7-7.3-10.6-7.3Z"
      fill="white"
    />
  </svg>
);

export const PlanetIcon: React.FC<IconSvgProps> = ({ size = 24, width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
      />
    </svg>
  );
};

export const MoonFilledIcon = ({ size = 24, width, height, ...props }: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <path
      d="M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z"
      fill="currentColor"
    />
  </svg>
);

export const SunFilledIcon = ({ size = 24, width, height, ...props }: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <g fill="currentColor">
      <path d="M19 12a7 7 0 11-7-7 7 7 0 017 7z" />
      <path d="M12 22.96a.969.969 0 01-1-.96v-.08a1 1 0 012 0 1.038 1.038 0 01-1 1.04zm7.14-2.82a1.024 1.024 0 01-.71-.29l-.13-.13a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.984.984 0 01-.7.29zm-14.28 0a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a1 1 0 01-.7.29zM22 13h-.08a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zM2.08 13H2a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zm16.93-7.01a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a.984.984 0 01-.7.29zm-14.02 0a1.024 1.024 0 01-.71-.29l-.13-.14a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.97.97 0 01-.7.3zM12 3.04a.969.969 0 01-1-.96V2a1 1 0 012 0 1.038 1.038 0 01-1 1.04z" />
    </g>
  </svg>
);
