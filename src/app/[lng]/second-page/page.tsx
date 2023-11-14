import Link from 'next/link';
import { useTranslation } from '../../i18n';
import { Test } from '@/app/[lng]/test';

type ParamsType = {
  params: Record<string, string>;
};

export default async function Page({ params: { lng } }: ParamsType) {
  const { t } = await useTranslation(lng);
  return (
    <>
      <h1>Hi {t('website_AffliateInsidepages_account10')}</h1>
      <Link href={`/${lng}`}>{t('back-to-home')}</Link>
      <h2>
        <Test />
      </h2>
    </>
  );
}
