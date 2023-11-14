'use client';
import { useState, useMemo } from 'react';
import styles from './AllPlans.module.scss';
import { useTranslation } from '../../../i18n/client';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
type ParamsType = {
  pricingIncludesData: any;
  lng: string;
};
const AllPlans = ({ pricingIncludesData, lng }: ParamsType) => {
  const { t } = useTranslation(lng);

  const [isShowAll, setIsShowAll] = useState(false);
  const planList = useMemo(() => {
    if (isShowAll) return pricingIncludesData;
    if (!isShowAll) {
      return pricingIncludesData.slice(0, 2);
    }
  }, [pricingIncludesData, isShowAll]);
  return (
    <>
      <div className={styles.commonTitle}>
        {t('website_webPricing_pricingPricingIncludesTitle')}
      </div>
      <div className={styles.planList}>
        {planList.map((plan: any) => {
          return (
            <div className={styles.planItem} key={plan.title}>
              <div className={styles.commonItemTitle}>{plan.title}</div>
              <div>{plan.desc}</div>
            </div>
          );
        })}

        <div className={styles.seeMore} onClick={() => setIsShowAll(!isShowAll)}>
          {isShowAll ? (
            <>
              COLLAPSE <UpOutlined />
            </>
          ) : (
            <>
              SEE MORE <DownOutlined />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default AllPlans;
