import 'server-only';

export const locales = [
  'ru', // Russian
  'uk', // Ukrainian
  'en', // English
  'bg', // Bulgarian
  'da', // Danish
  'el', // Greek
  'fi', // Finnish
  'fr', // French
  'it', // Italian
  'nb', // Norwegian Bokmål
  'sl', // Slovenian
  'tr', // Turkish
  'bs', // Bosnian
  'hr', // Croatian
  'lt', // Lithuanian
  'pt-PT', // Portuguese (Portugal)
  'sq', // Albanian
  'ca', // Catalan
  'hu', // Hungarian
  'lv', // Latvian
  'nl', // Dutch
  'ro', // Romanian
  'sr', // Serbian
  'zh', // Chinese (Simplified)
  'cs', // Czech
  'de', // German
  'es', // Spanish
  'et', // Estonian
  'mk', // Macedonian
  'pl', // Polish
  'sk', // Slovak
  'sv', // Swedish
] as const;

export type Locale = (typeof locales)[number];
