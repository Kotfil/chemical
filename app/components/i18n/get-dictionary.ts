import { Locale } from '@/app/components/i18n/i18n';

export async function getDictionary(locale: Locale) {
  try {
    return (await import(`./../../../translations/${locale}.json`)).default;
  } catch {
    return (await import('./../../../translations/en.json')).default;
  }
}
