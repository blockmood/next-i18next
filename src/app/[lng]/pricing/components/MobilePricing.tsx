'use client';
import { UIPeriod } from './PcPricing';
import { PlanConfig } from './pricingConfigs';
import AllPlans from './AllPlans';
import SeeMore from './SeeMore';
import styles from './MobilePricing.module.scss';
import { Button } from 'antd';
import { useTranslation } from '../../../i18n/client';
type PropsType = {
  getUserInfo: (val: string) => void;
  setPeriod: (val: UIPeriod) => void;
  period: string;
  rows: any;
  pricingConfigs: any;
  pricingIncludesData: any;
  lng: string;
};
const MobilePricing = ({
  getUserInfo,
  setPeriod,
  period,
  rows,
  pricingConfigs,
  pricingIncludesData,
  lng,
}: PropsType) => {
  const recommandPlan: PlanConfig['type'] = 'TYPE_ADVANCED';
  const { t } = useTranslation(lng);

  return (
    <div className={styles.mobilePricing}>
      <div className={styles.title}>{t('website_webPricing_pricingTitle')}</div>
      <div className={styles.subTitle}>{t('website_webPricing_pricingTipSelectPlan')}</div>
      <div className={styles.packageBox}>
        <div className={styles.package}>
          <div
            className={`${styles.packageItem} ${
              period === 'PERIOD_MONTH' && styles.packageItemActive
            }`}
            onClick={() => setPeriod('PERIOD_MONTH')}
          >
            Monthly
          </div>
          <div
            className={`${styles.packageItem} ${
              period === 'PERIOD_YEAR' && styles.packageItemActive
            }`}
            onClick={() => setPeriod('PERIOD_YEAR')}
          >
            Yearly
          </div>
        </div>
        <img src={'https://img.dsers.com/webSite/integration/pricing-top.png'} alt="" />
        <div className={styles.packageTip}>2 MONTHS OFF！</div>
      </div>
      {pricingConfigs &&
        pricingConfigs.map((plan: any) => {
          const isRecommand = plan.type === recommandPlan;
          const isAnnually = period === 'PERIOD_YEAR';
          const isFree = plan.type === 'TYPE_BASIC';
          const price = isFree ? 'Free' : !isAnnually ? plan.price.monthly : plan.price.annually;
          const isEnterprice = plan.type === 'TYPE_ENTERPRISE';
          const isCurrentPlan = false;
          const isNewer = false;
          return (
            <div className={styles.packageCard} key={plan.name}>
              <div className={styles.infoBox}>
                <div className={styles.titleBox}>
                  <div className={styles.planNameplanName}>{plan.name}</div>
                  <div className={styles.priceContainer}>
                    <div className={styles.price}>
                      {isAnnually && !isFree ? (
                        <span className={styles.comparePrice}>
                          {isEnterprice ? 'Start at ' : null}
                          <span style={{ textDecoration: 'line-through' }}>
                            ${plan.price.monthly}
                          </span>
                        </span>
                      ) : (
                        <div className={styles.mtop10}></div>
                      )}
                      <span className={styles.mainPrice}>
                        <span className={`${'highlightPrice' && isRecommand}`}>{price}</span>
                        {!isFree ? <span className={styles.dollerSymbol}>$</span> : null}
                      </span>
                      {!isFree ? <span className={styles.priceUnit}>/month</span> : null}
                    </div>
                  </div>
                </div>
                <div className={styles.info}>
                  {!isFree && isAnnually ? (
                    <div className={styles.highlightText}>
                      Billed anually at $
                      {parseFloat((parseFloat(plan.price.annually) * 12).toFixed(2))} <br />2 months
                      OFF!
                    </div>
                  ) : null}
                  <div className={styles.saleTip}>
                    {isEnterprice ? (
                      t('website_webPricing_pricingEnDescribe')
                    ) : isFree ? (
                      t('website_webPricing_pricingBasicText')
                    ) : (
                      <span>
                        {`(14 ${t('website_webPricing_pricingAdvancedText')})`}
                        <br />
                        {`${t('website_webPricing_pricingNoCardProText')}`}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div className={styles.bottomBtn}>
                {isCurrentPlan ? (
                  <div className={styles.currentPlanImg}>
                    <img src="https://img.dsers.com/images/current-plan.png" />
                  </div>
                ) : (
                  <>
                    {isEnterprice ? (
                      <a
                        onClick={() => getUserInfo('enterprise')}
                        href="mailto:subscription@dserspro.com"
                        className={styles.btn}
                      >
                        <Button type="primary">
                          {t('master_onBorading_OnboardingPlanEnterprise')}
                        </Button>
                      </a>
                    ) : null}
                    {isFree ? (
                      <Button type="primary" onClick={() => getUserInfo(plan.name)}>
                        {!isNewer
                          ? t('master_onBorading_OnboardingPlanBasic')
                          : t('website_webPricing_pricingSubscriptionBtn17')}
                      </Button>
                    ) : null}
                    {!isFree && !isEnterprice ? (
                      // Advanced
                      <div className={styles.hotBtn}>
                        {/* {isRecommand && <img src={hotIcon} />} */}
                        <Button type="primary" onClick={() => getUserInfo('standard')}>
                          {!isNewer
                            ? t('master_onBorading_OnboardingPlanPro')
                            : t('website_webPricing_pricingSelect')}
                        </Button>
                      </div>
                    ) : null}
                  </>
                )}
              </div>
              <SeeMore rows={rows} plan={plan} />
            </div>
          );
        })}
      <AllPlans lng={lng} pricingIncludesData={pricingIncludesData} />
    </div>
  );
};

export default MobilePricing;
