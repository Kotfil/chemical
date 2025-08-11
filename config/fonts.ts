import { Fira_Code as FontMono, Inter as FontSans } from 'next/font/google';
import localFont from 'next/font/local';

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const fontMono = FontMono({
  subsets: ['latin'],
  variable: '--font-mono',
});

// Blogger Sans
export const bloggerSans = localFont({
  src: [
    { path: '../public/font/blogger/blogger-sans.regular.ttf', weight: '400', style: 'normal' },
    { path: '../public/font/blogger/blogger-sans.italic.ttf', weight: '400', style: 'italic' },
  ],
  variable: '--font-blogger-sans',
  display: 'swap',
});
