import { languages } from '@/app/i18n/settings';
export const handleUrlRedirect = (input: string): string => {
  if (input.startsWith('/en/')) {
    // 如果传递的是/en/xxx，则跳转到/xxx
    return '/' + input.substr(4);
  } else {
    // 其他情况下正常跳转
    return input;
  }
};
