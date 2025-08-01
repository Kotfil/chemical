'use client';
import React, { FC, ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../18n';

export const I18NextLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};
