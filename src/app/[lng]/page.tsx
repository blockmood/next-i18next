import Link from 'next/link';
import { useTranslation } from '../i18n';
import { handleUrlRedirect } from '../utils';
import styles from './page.module.scss';
import { Button } from 'antd';
import { Banner, Rating, MakeDropshipping, CarouselSpecial } from './components';
import { useIsMobile } from '../utils/getResponsive';
import { Test } from './test';

type ParamsType = {
  params: Record<string, string>;
};

export default async function Page(props: ParamsType) {
  const { t } = await useTranslation(props.params.lng);

  return (
    <div className={styles.homeContainer}>
      {t('website_AffliateInsidepages_account10')}

      <Test lng={props.params.lng} />
      <Banner />
      <div className={styles.integrations}></div>
      {/* <CarouselSpecial /> */}
      <div className={styles.startDropshipping}></div>
      <MakeDropshipping />
      <div className={styles.successedDropshipping}></div>
      <div className={styles.sellerNum}></div>
      <div className={styles.rating}>
        <Rating />
      </div>
      <div className={styles.blogDropshipping}></div>
      <div className={styles.helpfulContent}></div>
      <div className={styles.questionToUs}></div>
      <div className={styles.startDsers}></div>
    </div>
  );

  return (
    <>
      <h1 className={styles.hello}>{t('accounts_accountsLogin_loginTitle')}</h1>
      <Link href={`/${lng}/second-page`}>{t('accounts_accountsRegister_CREARCUENTA')}</Link>
      <br />
      <Link href={handleUrlRedirect(`/${lng}/dashboard/settings/9999`)}>
        {t('accounts_accountsMain_timezoneTitle')}333
      </Link>
      <Link href={`/${lng}/dashboard/settings/9999`}>
        {t('accounts_accountsMain_timezoneTitle')}333
      </Link>

      <Button type="primary">hello</Button>
    </>
  );
}
