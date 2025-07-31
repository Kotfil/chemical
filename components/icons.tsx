import * as React from "react";

import { IconSvgProps } from "@/types";

export const GoogleIcon = ({
  size = 25,
  colors = ["#FFC107", "#FF3D00", "#4CAF50", "#1976D2"],
  ...props
}: {
  size?: number;
  colors?: string[];
} & React.SVGProps<SVGSVGElement>) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M18.9884 8.20463H18.25V8.16659H10V11.8333H15.1806C14.4248 13.9677 12.3939 15.4999 10 15.4999C6.96267 15.4999 4.50004 13.0373 4.50004 9.99992C4.50004 6.96254 6.96267 4.49992 10 4.49992C11.4021 4.49992 12.6776 5.02884 13.6488 5.89279L16.2416 3.3C14.6045 1.77421 12.4145 0.833252 10 0.833252C4.93775 0.833252 0.833374 4.93763 0.833374 9.99992C0.833374 15.0622 4.93775 19.1666 10 19.1666C15.0623 19.1666 19.1667 15.0622 19.1667 9.99992C19.1667 9.38529 19.1035 8.78534 18.9884 8.20463Z"
      fill={colors[0]}
    />
    <path
      d="M1.89001 5.73329L4.90172 7.942C5.71664 5.92442 7.69022 4.49992 9.99976 4.49992C11.4018 4.49992 12.6773 5.02883 13.6486 5.89279L16.2413 3.3C14.6042 1.77421 12.4143 0.833252 9.99976 0.833252C6.47885 0.833252 3.42543 2.82104 1.89001 5.73329Z"
      fill={colors[1]}
    />
    <path
      d="M10.0001 19.1665C12.3679 19.1665 14.5193 18.2604 16.1459 16.7868L13.3088 14.3861C12.3576 15.1095 11.1952 15.5008 10.0001 15.4998C7.61585 15.4998 5.59139 13.9795 4.82873 11.8579L1.83948 14.161C3.35656 17.1297 6.43748 19.1665 10.0001 19.1665Z"
      fill={colors[2]}
    />
    <path
      d="M18.9883 8.20455H18.2499V8.1665H9.99988V11.8332H15.1804C14.8189 12.849 14.1677 13.7367 13.3072 14.3865L13.3086 14.3856L16.1457 16.7864C15.9449 16.9688 19.1665 14.5832 19.1665 9.99984C19.1665 9.38521 19.1033 8.78525 18.9883 8.20455Z"
      fill={colors[3]}
    />
  </svg>
);

export const FacebookIcon = ({
  size = 50,
  colors = ["#1877F2", "#145DBF", "#0F46A0", "#0A3682"], // Пример оттенков синего для Facebook
  ...props
}: {
  size?: number;
  colors?: string[];
} & React.SVGProps<SVGSVGElement>) => (
  <svg
    width={size}
    height={size}
    viewBox="0 -3 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16 8C16 3.6 12.4 0 8 0C3.6 0 0 3.6 0 8C0 12 2.9 15.3 6.7 15.9V10.3H4.7V8H6.7V6.2C6.7 4.2 7.9 3.1 9.7 3.1C10.6 3.1 11.5 3.3 11.5 3.3V5.3H10.5C9.5 5.3 9.2 5.9 9.2 6.5V8H11.4L11 10.3H9.1V16C13.1 15.4 16 12 16 8Z"
      fill="white"
    />
  </svg>
);

export const LinkedinIcon = ({
  size = 50,
  colors = ["#1877F2", "#145DBF", "#0F46A0", "#0A3682"], // Пример оттенков синего для Facebook
  ...props
}: {
  size?: number;
  colors?: string[];
} & React.SVGProps<SVGSVGElement>) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M20.25 0H3.75C1.67893 0 0 1.67893 0 3.75V20.25C0 22.3211 1.67893 24 3.75 24H20.25C22.3211 24 24 22.3211 24 20.25V3.75C24 1.67893 22.3211 0 20.25 0Z"
      fill="#2867B2"
    />
    <path
      d="M8.7 18H6.15V9.975H8.7V18ZM7.425 8.85C6.6 8.85 6 8.25 6 7.425C6 6.6 6.675 6 7.425 6C8.25 6 8.85 6.6 8.85 7.425C8.85 8.25 8.25 8.85 7.425 8.85ZM18 18H15.45V13.65C15.45 12.375 14.925 12 14.175 12C13.425 12 12.675 12.6 12.675 13.725V18H10.125V9.975H12.525V11.1C12.75 10.575 13.65 9.75 14.925 9.75C16.35 9.75 17.85 10.575 17.85 13.05V18H18Z"
      fill="white"
    />
  </svg>
);

export const PlanetIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
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

export const MoonFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
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

export const SunFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
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

export const HeartFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
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
      d="M12.62 20.81c-.34.12-.9.12-1.24 0C8.48 19.82 2 15.69 2 8.69 2 5.6 4.49 3.1 7.56 3.1c1.82 0 3.43.88 4.44 2.24a5.53 5.53 0 0 1 4.44-2.24C19.51 3.1 22 5.6 22 8.69c0 7-6.48 11.13-9.38 12.12Z"
      fill="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
  </svg>
);

export const SearchIcon = (props: IconSvgProps) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height="1em"
    role="presentation"
    viewBox="0 0 24 24"
    width="1em"
    {...props}
  >
    <path
      d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
    <path
      d="M22 22L20 20"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);
