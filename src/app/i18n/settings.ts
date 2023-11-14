export const fallbackLng = 'en';
export const languages = [fallbackLng, 'fr', 'pt', 'de', 'it', 'es'];
export type ILanguage = (typeof languages)[number];
//留个key 为了失效后能够快速切换
export const defaultNS = 'translation';
//保证客户端跟服务端数据渲染一致
export const cookieName = 'i18next';

export function getOptions(lng = fallbackLng, ns = defaultNS) {
  return {
    // debug: true,
    supportedLngs: languages,
    // preload: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}
