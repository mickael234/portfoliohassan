import {getRequestConfig} from 'next-intl/server';
 
const locales = ['en', 'fr'];
 
export default getRequestConfig(async ({locale}) => {
  if (!locales.includes(locale as any)) {
    throw new Error('Invalid locale');
  }
 
  return {
    messages: (await import(`../messages/${locale}.json`)).default
  };
});