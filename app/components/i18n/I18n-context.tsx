'use client';

import { createContext, useContext } from 'react';

export type Dictionary = { [key: string]: string };

const I18nContext = createContext<Dictionary | null>(null);

export const useTranslation = () => {
    const dict = useContext(I18nContext);
    if (!dict) throw new Error('No dictionary found in context');
    return dict;
};

export default I18nContext;
