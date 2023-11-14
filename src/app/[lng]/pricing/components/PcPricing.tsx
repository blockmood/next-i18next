'use client';
import React, { ReactNode, useState, useMemo, useEffect } from 'react';
import { CheckCircleFilled, CustomerServiceFilled } from '@ant-design/icons';
import { List, Table, Grid, Button } from 'antd';
import { ColumnsType, TableProps } from 'antd/lib/table';
import {
  PlanConfig,
  pricingPageVisiblePlan,
  LimitedPlanFeatures,
  Period,
  PlanType,
} from './pricingConfigs';
import { useTranslation } from '../../../i18n/client';
import { detectServerDeviceType } from '../../../utils/getDeviceType';
import styles from './PcPricing.module.scss';
import MobilePricing from './MobilePricing';

type PropsType = {
  lng: string;
  isMobile: boolean;
};
type AllTableFeatures =
  | keyof LimitedPlanFeatures
  | 'PLACE_IN_BULK'
  | 'CUSTOMER_SUPPORT'
  | 'MAPPING_FEATURE';
export type PricingRowType = {
  id: AllTableFeatures;
  title: ReactNode;
  desc: ReactNode;
  newFeature?: boolean;
  dataRender?: (plan: PlanConfig) => ReactNode;
};

export type UIPeriod = Exclude<Period, 'PERIOD_UNSPECIFIED'>;
const CheckedIcon = () => <CheckCircleFilled style={{ color: '#4caf50', fontSize: 24 }} />;
const PcPricing = ({ lng, isMobile }: PropsType) => {
  const { t } = useTranslation(lng);
  const [fixedTop, setFixedTop] = useState(0);
  const [pricingIncludesData, setPricingIncludesData] = useState([]);
  const [fixedHeader, setFixedHeader] = useState(false);
  const pricingConfigs = useMemo(() => {
    return [...pricingPageVisiblePlan].reverse();
  }, []);
  const popularTipPlan1: PlanConfig['type'] = 'TYPE_ADVANCED';

  const popularTipPlan2: PlanConfig['type'] = 'TYPE_PRO';
  const recommandPlan: PlanConfig['type'] = 'TYPE_ADVANCED';

  const [period, setPeriod] = useState<UIPeriod>('PERIOD_MONTH');

  const getUserInfo = (buttonType: string) => {
    const custom_info = [{ name: 'button type', value: buttonType }];
  };
  const rows = useMemo(() => {
    return [
      {
        id: 'PLACE_IN_BULK',
        title: t('website_webPricing_ProcessOrdersInBulk'),
        desc: t('website_webPricing_MultipleOrders'),
        dataRender: (plan) => {
          if (plan.type === 'TYPE_BASIC') {
            return t('website_webPricing_Available');
          }
          return (
            <span className={styles.highlightText}>
              {t('website_webPricing_MultipleOrdersDescription')}
            </span>
          );
        },
      },
      {
        id: 'CUSTOMER_SUPPORT',
        title: t('website_webPricing_CustomerSupport'),
        desc: t('website_webPricing_24HourCustomerService'),
        dataRender: (plan) => {
          return plan.type === 'TYPE_BASIC' ? (
            t('website_webPricing_Available')
          ) : (
            <span>{t('website_webPricing_AvailableFirstPriority')}</span>
          );
        },
      },
      {
        id: 'tracking',
        title: t('website_webPricing_Tracking'),
        desc: t('website_webPricing_TrackingDescription'),
        dataRender: (plan) => {
          return plan.features.tracking ? <CheckedIcon /> : 'Unavailable';
        },
      },
      {
        id: 'platformLimit',
        title: t('website_webPricing_MultiplePlatformLimit'),
        desc: t('website_webPricing_MultiplePlatformLimitDescription'),
        dataRender: (plan) => {
          return plan.features.platformLimit <= 1 ? (
            <span className={styles.basic}>Unavailable</span>
          ) : (
            <span className={styles.highlightText}>{plan.features.platformLimit}</span>
          );
        },
      },
      {
        id: 'productLimit',
        title: t('website_webPricing_ProductLimit'),
        desc: t('website_webPricing_ManageProducts'),
        dataRender: (plan) => {
          return plan.type === 'TYPE_BASIC' ? (
            <span>
              <span className={styles.basic}>{plan.features.productLimit}</span>
              <span>/{t('website_webPricing_account')}</span>
            </span>
          ) : (
            <span>
              <span className={styles.highlightText}>{plan.features.productLimit}</span>
              <span>/{t('website_webPricing_account')}</span>
            </span>
          );
        },
      },
      {
        id: 'storeLimit',
        title: t('website_webPricing_Store Limit'),
        desc: t('website_webPricing_Store LimitDescription'),
        dataRender: (plan) => {
          return plan.type === 'TYPE_BASIC' ? (
            <span className={styles.basic}>{plan.features.storeLimit}</span>
          ) : (
            <div>
              <div className={styles.highlightText}>{plan.features.storeLimit}</div>
              {popularTipPlan1 === plan.type ? (
                <div>{t('website_webPricing_Store LimitDescription2')}</div>
              ) : null}
              {popularTipPlan2 === plan.type ? (
                <div>{t('website_webPricing_Store LimitDescription1')}</div>
              ) : null}
            </div>
          );
        },
      },
      {
        id: 'paypalLimit',
        title: t('website_webPricing_PayPalLimit'),
        desc: t('website_webPricing_PayPalLimitDescription'),
        dataRender: (plan) => {
          return plan.type === 'TYPE_BASIC' ? (
            <span>
              <span className={styles.basic}>{plan.features.paypalLimit}</span>
              <span>/{t('website_webPricing_account')}</span>
            </span>
          ) : (
            <span>
              <span className={styles.highlightText}>{plan.features.paypalLimit}</span>
              <span>/{t('website_webPricing_account')}</span>
            </span>
          );
        },
      },
      {
        id: 'supplierAccountLimit',
        title: t('website_webPricing_SupplierAPPAccountsLimit'),
        desc: t('website_webPricing_SupplierAPPAccountsLimitDescription'),
        dataRender: (plan) => {
          return plan.type === 'TYPE_BASIC' ? (
            <span>
              <span className={styles.basic}>{plan.features.supplierAccountLimit}</span>
              <span>/{t('website_webPricing_account')}</span>
            </span>
          ) : (
            <span>
              <span className={styles.highlightText}>{plan.features.supplierAccountLimit}</span>
              <span>/{t('website_webPricing_account')}</span>
            </span>
          );
        },
      },
      {
        id: 'MAPPING_FEATURE',
        title: t('website_webPricing_VariantsMapping'),
        desc: t('website_webPricing_VariantsMappingDescription1'),
        dataRender: (plan) => {
          return plan.type === 'TYPE_BASIC' ? (
            t('website_webPricing_VariantsMappingDescription3')
          ) : (
            <span>{t('website_webPricing_VariantsMappingDescription2')}</span>
          );
        },
      },
      {
        id: 'mappingAdvanced',
        title: t('website_webPricing_AdvancedMapping'),
        desc: t('website_webPricing_AdvancedMappingDescription'),
        dataRender: (plan) => {
          return plan.type === 'TYPE_BASIC' ? (
            'Unavailable'
          ) : (
            <span>{t('website_webPricing_AdvancedMappingDescription1')}</span>
          );
        },
      },
      {
        id: 'mappingBogoBundle',
        title: t('website_webPricing_BoGoBundleMapping'),
        desc: t('website_webPricing_BoGoBundleMappingDescription'),
        dataRender: (plan) => {
          return plan.features.mappingBogoBundle ? <CheckedIcon /> : 'Unavailable';
        },
      },
      {
        id: 'batchUpdatePriceLimit',
        title: t('website_webPricing_ManuallyProductsPrice'),
        desc: t('website_webPricing_ManuallyProductsPriceDescription'),
        dataRender: (plan) => {
          const text =
            plan.type === 'TYPE_BASIC'
              ? `${plan.features.batchUpdatePriceLimit} time/30 ${t('website_webPricing_days')}`
              : `${plan.features.batchUpdatePriceLimit} ${t('website_webPricing_times')}/30 ${t(
                  'website_webPricing_days'
                )}`;
          return plan.type === 'TYPE_BASIC' ? (
            text
          ) : (
            <span className={styles.highlightText}>{text}</span>
          );
        },
      },
      {
        id: 'pricingRuleAdvanced',
        title: t('website_webPricing_AutomatedPricingRule'),
        desc: t('website_webPricing_AutomatedPricingRuleDescription'),
        dataRender: (plan) => {
          return plan.type === 'TYPE_BASIC' ? (
            t('website_webPricing_AutomatedPricingRuleDescription2')
          ) : (
            <span>{t('website_webPricing_AutomatedPricingRuleDescription1')}</span>
          );
        },
      },
      {
        id: 'updateSalePriceAutomatically',
        title: t('website_webPricing_AutomaticPriceUpdate'),
        desc: t('website_webPricing_AutomaticPriceUpdateDescription'),
        dataRender: (plan) => {
          return plan.type === 'TYPE_BASIC' ? (
            t('website_webPricing_NotificationOnly')
          ) : (
            <span>{t('website_webPricing_AutomaticUpdate')}</span>
          );
        },
      },
      {
        id: 'updateInventoryAutomatically',
        title: t('website_webPricing_InventoryManagement'),
        desc: t('website_webPricing_InventoryManagementDescription'),
        dataRender: (plan) => {
          return plan.type === 'TYPE_BASIC' ? (
            t('website_webPricing_NotificationOnly')
          ) : (
            <span>{t('website_webPricing_AutomaticUpdate')}</span>
          );
        },
      },
      {
        id: 'productImagesManagement',
        title: t('website_webPricing_ProductImagesManagement'),
        desc: t('website_webPricing_ProductImagesManagementDes'),
        dataRender: (plan) => {
          return !plan.features.productImagesManagement ? (
            t('website_webPricing_Unavailable')
          ) : (
            <CheckedIcon />
          );
        },
      },
      {
        id: 'staffAccountLimit',
        title: t('website_webPricing_StaffAccount'),
        desc: t('website_webPricing_StaffAccountDescription'),
        dataRender: (plan) => {
          const text =
            plan.features.staffAccountLimit === Infinity
              ? t('website_webPricing_Unlimited')
              : plan.features.staffAccountLimit;
          return plan.type === 'TYPE_BASIC' ? (
            'Unavailable'
          ) : (
            <span className={styles.highlightText}>{text}</span>
          );
        },
      },
      {
        id: 'notificationFrequency',
        title: t('website_webPricing_NotificationFrequency'),
        desc: t('website_webPricing_ontentToBeDetermined'),
        dataRender: (plan) => {
          if (plan.features.notificationFrequency) {
            return <span>{plan.features.notificationFrequency} hours</span>;
          } else {
            return t('website_webPricing_Unavailable');
          }
        },
      },
      {
        id: 'syncOrderCustomizationInformation',
        title: t('website_webPricing_SendCostToStore'),
        desc: t('website_webPricing_SendCostToStoreDescription'),
        dataRender: (plan) => {
          return !plan.features.pricingRuleAdvanced ? 'Unavailable' : <CheckedIcon />;
        },
      },
      {
        id: 'customFeatures',
        title: t('website_webPricing_Customization'),
        desc: t('website_webPricing_CustomizationDescription'),
        dataRender: (plan) => {
          if (plan.features.customFeatures) {
            return (
              <span className={styles.highlightText}>
                {t('website_webPricing_CustomizationDescription1')}
              </span>
            );
          } else {
            return t('website_webPricing_Unavailable');
          }
        },
      },
      {
        id: 'affiliate',
        title: (
          <span>
            <CustomerServiceFilled />
            {t('website_webPricing_Affiliate')}
          </span>
        ),
        desc: t('website_webPricing_AcontactUs'),
        dataRender: (plan) => {
          return plan.features.affiliate ? <CheckedIcon /> : 'Unavailable';
        },
      },
    ] as TableProps<PricingRowType>['dataSource'];
  }, []);
  const tableColumns = useMemo(() => {
    return [
      // 功能标题列
      {
        title: () => {
          return (
            <div className={`${styles.headerLeftTab} ${styles.fixed && fixedHeader}`}>
              <div className={styles.textContainer}>
                <div className={styles.textContainerTitle}>2 months off！</div>
                <div className={styles.textContainerImg}>
                  <img src="https://img.dsers.com/setting/pricing-off.png" alt="" />
                </div>
              </div>
              <div className={styles.periodContainer}>
                <div
                  className={`${styles.periodItem} ${period === 'PERIOD_MONTH' && styles.active}`}
                  onClick={() => setPeriod('PERIOD_MONTH')}
                >
                  Monthly
                </div>
                <div
                  className={`${styles.periodItem} ${period === 'PERIOD_YEAR' && styles.active}`}
                  onClick={() => setPeriod('PERIOD_YEAR')}
                >
                  Yearly
                </div>
              </div>
            </div>
          );
        },

        render: (_: any, record: any) => {
          return (
            <div>
              <div className={styles.featureTitle}>{record.title}</div>
              {record.desc ? <div className={styles.featureDesc}>{record.desc}</div> : null}
            </div>
          );
        },
        fixed: 'left',
      },

      // pricing数据列
      ...pricingConfigs.map((plan) => {
        return {
          title: () => {
            const isRecommand = plan.type === recommandPlan;
            const isAnnually = period === 'PERIOD_YEAR';
            const isFree = plan.type === 'TYPE_BASIC';
            const price = isFree ? 'Free' : !isAnnually ? plan.price.monthly : plan.price.annually;
            const isEnterprice = plan.type === 'TYPE_ENTERPRISE';

            /**
             * 假数据后续修改    false 展示按钮 true 展示图标
             */
            const isCurrentPlan = false;
            const isNewer = false;

            return (
              <>
                {isRecommand ? (
                  <img
                    className={styles.recommandImg}
                    src="https://img.dsers.com/images/pricing_recomand.svg"
                  />
                ) : null}
                <div className={styles.headerContent}>
                  <div className={styles.planHeader}>
                    <div className={styles.planName}>{plan.name}</div>
                    <div className={styles.priceContainer}>
                      <div className={styles.price}>
                        <span className={styles.mainPrice}>
                          <span className={`${isRecommand && 'highlightPrice'}`}>{price}</span>
                          {isAnnually && !isFree ? (
                            <span className={styles.comparePrice}>
                              {isEnterprice ? 'Start at ' : null}
                              <span style={{ textDecoration: 'line-through' }}>
                                {plan.price.monthly}
                              </span>
                            </span>
                          ) : null}
                          {!isFree ? <span className={styles.dollerSymbol}>$</span> : null}
                        </span>
                        {!isFree ? <span className={styles.priceUnit}>/month</span> : null}
                      </div>
                    </div>
                    {!isFree && isAnnually && !fixedHeader ? (
                      <div className={styles.highlightText}>
                        Billed anually at $
                        {parseFloat((parseFloat(plan.price.annually) * 12).toFixed(2))} <br />2
                        months OFF!
                      </div>
                    ) : null}
                  </div>
                  <div className={styles.headerBottom}>
                    {!fixedHeader ? (
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
                    ) : null}

                    <div className={styles.buttonContainer}>
                      {isCurrentPlan ? (
                        <div className={styles.currentPlanImg}>
                          <img src="https://img.dsers.com/images/current-plan.png" />
                        </div>
                      ) : (
                        <div>
                          {isEnterprice ? (
                            <a
                              onClick={() => getUserInfo('enterprise')}
                              href="mailto:subscription@dserspro.com"
                            >
                              <Button>{t('master_onBorading_OnboardingPlanEnterprise')}</Button>
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
                            <Button type="primary" onClick={() => getUserInfo('standard')}>
                              {!isNewer
                                ? t('master_onBorading_OnboardingPlanPro')
                                : t('website_webPricing_pricingSelect')}
                            </Button>
                          ) : null}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </>
            );
          },
          // 设置列高亮
          onCell: (_: any, rowIndex: any) => {
            // const isTop = rowIndex === 0;
            // const isBottom = rowIndex === rows.length - 1;
            // return {
            //   className: `highlightColumn ${isTop && 'highlightColumnTop'} ${isBottom && 'highlightColumnBottom'}`,
            // };

            return {};
          },
          render: (_: any, feature: any) => {
            return feature.dataRender ? feature.dataRender(plan) : '';
          },
        };
      }),
    ] as ColumnsType<PricingRowType>;
  }, [period, recommandPlan]);
  const breakPoints = Grid.useBreakpoint();

  const commonColumns = useMemo(() => {
    switch (true) {
      case breakPoints.xxl:
      case breakPoints.xl:
      case breakPoints.lg:
      case breakPoints.md:
        return 3;
      case breakPoints.sm:
        return 2;
      case breakPoints.xs:
        return 1;
      default:
        return 3;
    }
  }, [breakPoints]);

  1;
  return (
    <>
      {!isMobile ? (
        <div className={styles.PricingNew}>
          <div style={{ maxWidth: 1180, margin: '0 auto 0', minWidth: 345 }}>
            <div className={styles.title}>{t('website_webPricing_pricingTitle')}</div>
            <div className={styles.subTitle}>{t('website_webPricing_pricingTipSelectPlan')}</div>
            <Table
              sticky={{
                offsetHeader: fixedTop,
              }}
              className={styles.pricingTable}
              pagination={false}
              dataSource={rows}
              rowKey="id"
              scroll={{ x: (pricingConfigs && pricingConfigs.length + 1) * 175 }}
              columns={tableColumns}
              bordered={false}
            ></Table>
            <div className={styles.commonTitle}>
              {t('website_webPricing_pricingPricingIncludesTitle')}
            </div>
            <div className={styles.commonContainer}>
              <List
                grid={{
                  column: commonColumns,
                }}
                dataSource={pricingIncludesData}
                renderItem={(i: any, index) => {
                  const even = Math.ceil((index + 1) / commonColumns) % 2 === 0;
                  return (
                    <List.Item
                      className={[styles.commonItem, styles.even && styles.commonItem].join(' ')}
                      style={{ marginBottom: 0 }}
                    >
                      <div className={styles.commonItemTitle}>{i.title}</div>
                      <div>{i.desc}</div>
                    </List.Item>
                  );
                }}
              ></List>
            </div>
          </div>
        </div>
      ) : (
        <MobilePricing
          getUserInfo={getUserInfo}
          setPeriod={setPeriod}
          period={period}
          rows={rows}
          pricingConfigs={pricingConfigs}
          lng={lng}
          pricingIncludesData={pricingIncludesData}
        />
      )}
    </>
  );
};

export default PcPricing;
