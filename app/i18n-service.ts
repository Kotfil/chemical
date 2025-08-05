import { cookies } from 'next/headers';
import { getDictionary } from '@/app/components/i18n/get-dictionary';
import { Locale } from '@/app/components/i18n/i18n';

export async function getLocaleDict(): Promise<{ locale: Locale; dict: any }> {
  const cookieStore = await cookies();
  const cookieLang = cookieStore.get('lang')?.value as Locale | 'en';

  const dict = await getDictionary(cookieLang);

  return { locale: cookieLang, dict };
}
