'use client';

import { useEffect, useState } from 'react';
import { Locale } from '@/app/components/i18n/i18n';
import I18nContext, { Dictionary } from '@/app/components/i18n/I18n-context';

export const Client18nProvider = ({ children }: { children: React.ReactNode }) => {
  const [dict, setDict] = useState<Dictionary | null>(null);
  const [lang, setLang] = useState<Locale>('en');

  useEffect(() => {
    const currentLang =
      (document.cookie
        .split('; ')
        .find(c => c.startsWith('lang='))
        ?.split('=')[1] as Locale) || 'en';

    if (currentLang !== lang) setLang(currentLang);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentLang =
        (document.cookie
          .split('; ')
          .find(c => c.startsWith('lang='))
          ?.split('=')[1] as Locale) || 'en';

      if (currentLang !== lang) {
        setLang(currentLang);
      }
    }, 500);

    return () => clearInterval(interval);
  }, [lang]);

  useEffect(() => {
    import(`./../../../translations/${lang}.json`)
      .then(mod => setDict(mod.default))
      .catch(() => import('./../../../translations/en.json').then(mod => setDict(mod.default as any)));
  }, [lang]);

  if (!dict) return null;

  return <I18nContext.Provider value={dict}>{children}</I18nContext.Provider>;
};
