/**
 * 循环类型
 */
export type Period =
  // 未定义
  | 'PERIOD_UNSPECIFIED'
  // 月费
  | 'PERIOD_MONTH'
  // 年费
  | 'PERIOD_YEAR';

/**
 * 主套餐类型
 */
export type PlanType =
  | 'TYPE_UNSPECIFIED'
  | 'TYPE_BASIC'
  | 'TYPE_ADVANCED'
  | 'TYPE_PRO'
  | 'TYPE_STANDARD'
  | 'TYPE_BUSINESS'
  | 'TYPE_ENTERPRISE'
  | 'TYPE_DISCOUNT_ADVANCED'
  | 'TYPE_STANDARD_PRIMARY'
  | 'TYPE_SPLIT_FULFILL'
  | 'TYPE_CUSTOM_BASIC'
  | 'TYPE_CUSTOM_ENTERPRISE'
  | 'TYPE_BASIC_TRACKING'
  | 'TYPE_BASIC_500'
  | 'TYPE_BASIC_1000'
  | 'TYPE_CUSTOM_BASIC_TRACKING'
  | 'TYPE_CUSTOM_BASIC_500'
  | 'TYPE_CUSTOM_BASIC_1000';

export type LimitedPlanFeatures = {
  /**
   * Tracking功能是否可用
   */
  tracking: boolean;
  /**
   * 套餐商品限制
   */
  productLimit: number;
  /**
   * 套餐店铺限制
   */
  storeLimit: number;
  /**
   * 套餐销端平台个数限制
   */
  platformLimit: number;
  /**
   * Paypal账号授权数限制
   */
  paypalLimit: number;
  /**
   * 供应商账号数量限制
   */
  supplierAccountLimit: number;
  /**
   * basic mapping是否可用
   */
  mappingBasic: boolean;
  /**
   * standard mapping是否可用
   */
  mappingStandard: boolean;
  /**
   * advance mapping是否可用
   */
  mappingAdvanced: boolean;
  /**
   * bogo bundle mapping是否可用
   */
  mappingBogoBundle: boolean;
  /**
   * 批量更新商品价格每月次数限制
   */
  batchUpdatePriceLimit: number;
  /**
   * 高级pricing rule是否可用
   */
  pricingRuleAdvanced: boolean;
  /**
   * 自动同步库存是否可用
   */
  updateInventoryAutomatically: boolean;
  /**
   * 自动同步价格是否可用
   */
  updateSalePriceAutomatically: boolean;
  /**
   * 通知触发频率
   */
  notificationFrequency: number;
  /**
   * 子账号数量限制
   */
  staffAccountLimit: number;
  /**
   * 是否可以定制化开发
   */
  customFeatures: boolean;
  // 上传编辑商品图片
  productImagesManagement: boolean;

  /**
   * 是否可以同步订单自定义信息
   */
  syncOrderCustomizationInformation: boolean;
  /**
   * 是否可以使用AE订单返点
   */
  affiliate: boolean;
};

export type PlanConfig = Readonly<{
  /**
   * 套餐类型
   */
  type: Exclude<PlanType, 'TYPE_UNSPECIFIED'>;
  /**
   * 套餐名称
   */
  name: string;
  /**
   * 套餐价格
   */
  price: Readonly<{
    /**
     * 月付单月价格
     */
    monthly: string;
    /**
     * 年付单月价格
     */
    annually: string;
  }>;

  /**
   * 套餐内容
   */
  features: Readonly<LimitedPlanFeatures>;
}>;

export const basicPlan: PlanConfig = {
  type: 'TYPE_BASIC',
  // name: t('website_webPricing_pricingBasic'),
  name: 'Basic',

  price: {
    monthly: '0.00',
    annually: '0.00',
  },
  features: {
    tracking: false,
    productImagesManagement: false,
    productLimit: 3000,
    storeLimit: 3,
    platformLimit: 1,
    paypalLimit: 1,
    supplierAccountLimit: 1,
    mappingBasic: true,
    mappingStandard: true,
    mappingAdvanced: false,
    mappingBogoBundle: false,
    batchUpdatePriceLimit: 1,
    pricingRuleAdvanced: false,
    updateInventoryAutomatically: false,
    updateSalePriceAutomatically: false,
    staffAccountLimit: 0,
    customFeatures: false,
    notificationFrequency: 48,
    syncOrderCustomizationInformation: false,
    affiliate: false,
  },
};

export const advancedPlan: PlanConfig = {
  type: 'TYPE_ADVANCED',
  // name: t('website_webPricing_pricingAdvanced'),
  name: 'Advanced',

  price: {
    monthly: '19.9',
    annually: '15.9',
  },
  features: {
    tracking: true,
    productImagesManagement: true,
    productLimit: 20000,
    storeLimit: 10,
    platformLimit: 1,
    paypalLimit: 2,
    supplierAccountLimit: 3,
    mappingBasic: true,
    mappingStandard: true,
    mappingAdvanced: true,
    mappingBogoBundle: true,
    batchUpdatePriceLimit: 4,
    pricingRuleAdvanced: true,
    updateInventoryAutomatically: true,
    updateSalePriceAutomatically: true,
    staffAccountLimit: 5,
    customFeatures: false,
    notificationFrequency: 12,
    syncOrderCustomizationInformation: true,
    affiliate: true,
  },
};

/**
 * advance plan 打折款
 * 月付享受8折
 * 功能限制同advance
 */
export const discountAdvancePlan: PlanConfig = {
  type: 'TYPE_DISCOUNT_ADVANCED',
  name: 'Advanced',

  price: {
    monthly: '15.9',
    annually: '15.9',
  },

  features: { ...advancedPlan.features },
};

export const proPlan: PlanConfig = {
  type: 'TYPE_PRO',
  // name: t('website_webPricing_pricingPro'),
  name: 'Pro',

  price: {
    monthly: '49.9',
    annually: '39.9',
  },
  features: {
    tracking: true,
    productImagesManagement: true,
    productLimit: 75000,
    storeLimit: 25,
    platformLimit: 3,
    paypalLimit: 5,
    supplierAccountLimit: 5,
    mappingBasic: true,
    mappingStandard: true,
    mappingAdvanced: true,
    mappingBogoBundle: true,
    batchUpdatePriceLimit: 10,
    pricingRuleAdvanced: true,
    updateInventoryAutomatically: true,
    updateSalePriceAutomatically: true,
    staffAccountLimit: 10,
    customFeatures: false,
    notificationFrequency: 12,
    syncOrderCustomizationInformation: true,
    affiliate: true,
  },
};

/**
 * 后端叫做Split fulfill
 * 前端叫custom pro
 * 不知道具体啥限制啥价格，先和pro一样
 */
const customProPlan: PlanConfig = {
  type: 'TYPE_SPLIT_FULFILL',
  name: 'Custom Pro',
  price: {
    monthly: '49.9',
    annually: '39.9',
  },
  features: proPlan.features,
};

/**
 * Business plan
 * 曾经存在过，具体限制目前不明确
 */
export const businessPlan: PlanConfig = {
  type: 'TYPE_BUSINESS',

  name: 'Business',

  price: {
    monthly: '199',
    annually: '159',
  },

  features: {
    tracking: true,
    productImagesManagement: true,
    productLimit: 75000,
    storeLimit: 25,
    platformLimit: 3,
    paypalLimit: 5,
    supplierAccountLimit: 5,
    mappingBasic: true,
    mappingStandard: true,
    mappingAdvanced: true,
    mappingBogoBundle: true,
    batchUpdatePriceLimit: 10,
    pricingRuleAdvanced: true,
    updateInventoryAutomatically: true,
    updateSalePriceAutomatically: true,
    staffAccountLimit: 10,
    customFeatures: false,
    notificationFrequency: 12,
    syncOrderCustomizationInformation: true,
    affiliate: true,
  },
};

export const enterprisePlan: PlanConfig = {
  type: 'TYPE_ENTERPRISE',
  // name: t('website_webPricing_pricingEnterprise'),
  name: 'Enterprise',

  price: {
    monthly: '499',
    annually: '399',
  },
  features: {
    tracking: true,
    productImagesManagement: true,
    productLimit: 100000,
    storeLimit: 50,
    platformLimit: 5,
    paypalLimit: 10,
    supplierAccountLimit: 10,
    mappingBasic: true,
    mappingStandard: true,
    mappingAdvanced: true,
    mappingBogoBundle: true,
    batchUpdatePriceLimit: 10,
    pricingRuleAdvanced: true,
    updateInventoryAutomatically: true,
    updateSalePriceAutomatically: true,
    staffAccountLimit: Infinity,
    customFeatures: true,
    notificationFrequency: 12,
    syncOrderCustomizationInformation: true,
    affiliate: true,
  },
};

/**
 * Standard plan
 * 比basic plan增加了
 * 自动同步mapping的供应商的价格和库存到销端平台
 */
const standardPlan: PlanConfig = {
  // name: t('website_webPricing_pricingStandard'),
  name: 'Standard',

  type: 'TYPE_STANDARD',
  price: {
    annually: '1.59',
    monthly: '1.99',
  },
  features: {
    ...basicPlan.features,
    updateInventoryAutomatically: true,
    updateSalePriceAutomatically: true,
  },
};

/**
 * Standard primary plan
 * 比basic plan增加了
 * 自动同步mapping的供应商的价格和库存到销端平台
 */
const standardPrimaryPlan: PlanConfig = {
  // name: t('website_webPricing_pricingStandard'),
  name: 'Standard',

  type: 'TYPE_STANDARD_PRIMARY',
  price: {
    annually: '9.9',
    monthly: '9.9',
  },
  features: {
    ...standardPlan.features,
    // updateInventoryAutomatically: true,
    // updateSalePriceAutomatically: true,
  },
};

/**
 * Custom Enterprise
 * 比enterprise增加了
 * 店铺 -> 无限制
 * 商品数 -> 60万
 */
const customEnterprisePlan: PlanConfig = {
  // name: t('website_webPricing_pricingStandard'),
  name: 'Custom Enterprise',

  type: 'TYPE_CUSTOM_ENTERPRISE',
  price: {
    annually: '1398',
    monthly: '1398',
  },
  features: {
    ...enterprisePlan.features,
    productLimit: 600000,
    storeLimit: Infinity,
  },
};

/**
 * Basic+Tracking
 * 比basic增加了
 * tracking功能
 */
const basicWithTrackingPlan: PlanConfig = {
  // name: t('website_webPricing_pricingStandard'),
  name: 'Basic+Tracking',

  type: 'TYPE_BASIC_TRACKING',
  price: {
    annually: '10.99',
    monthly: '10.99',
  },
  features: {
    ...basicPlan.features,
    updateInventoryAutomatically: true,
    updateSalePriceAutomatically: true,
  },
};

/**
 * Basic+500
 * 比basic增加了
 * +500商品限制
 */
const basicWithProduct500UpPlan: PlanConfig = {
  // name: t('website_webPricing_pricingStandard'),
  name: 'Basic+500',

  type: 'TYPE_BASIC_500',
  price: {
    annually: '7.99',
    monthly: '7.99',
  },
  features: {
    ...basicPlan.features,
    productLimit: basicPlan.features.productLimit + 500,
  },
};

/**
 * Basic+1000
 * 比basic增加了
 * +1000商品限制
 */
const basicWithProduct1000UpPlan: PlanConfig = {
  // name: t('website_webPricing_pricingStandard'),
  name: 'Basic+1000',

  type: 'TYPE_BASIC_1000',
  price: {
    annually: '12.99',
    monthly: '12.99',
  },
  features: {
    ...basicPlan.features,
    productLimit: basicPlan.features.productLimit + 1000,
  },
};

/**
 * Custom basic
 * oberlo迁移用户特殊basic
 * 商品限制降低到500
 * 可以使用自动同步价格和库存到销端的功能
 */
const customBasicPlan: PlanConfig = {
  // name: t('website_webPricing_pricingStandard'),
  name: 'Baisc',

  type: 'TYPE_CUSTOM_BASIC',
  price: {
    annually: '0.00',
    monthly: '0.00',
  },
  features: {
    ...basicPlan.features,
    productLimit: 500,
    updateInventoryAutomatically: true,
    updateSalePriceAutomatically: true,
  },
};

/**
 * Custom basic+500
 * oberlo迁移用户特殊basic
 * 比custom basic增加500商品限制
 */
const customBasicWithProduct500UpPlan: PlanConfig = {
  // name: t('website_webPricing_pricingStandard'),
  name: 'Basic',

  type: 'TYPE_CUSTOM_BASIC_500',
  price: {
    annually: '7.99',
    monthly: '7.99',
  },
  features: {
    ...customBasicPlan.features,
    productLimit: customBasicPlan.features.productLimit + 500,
  },
};

/**
 * Custom basic+1000
 * oberlo迁移用户特殊basic
 * 比custom basic增加1000商品限制
 */
const customBasicWithProduct1000UpPlan: PlanConfig = {
  // name: t('website_webPricing_pricingStandard'),
  name: 'Basic',

  type: 'TYPE_CUSTOM_BASIC_1000',
  price: {
    annually: '12.99',
    monthly: '12.99',
  },
  features: {
    ...customBasicPlan.features,
    productLimit: customBasicPlan.features.productLimit + 1000,
  },
};

/**
 * Custom basic+Tracking
 * oberlo迁移用户特殊basic
 * 比custom basic增加Tracking功能
 */
const customBasicWithTrackingPlan: PlanConfig = {
  // name: t('website_webPricing_pricingStandard'),
  name: 'Basic',

  type: 'TYPE_CUSTOM_BASIC_TRACKING',
  price: {
    annually: '10.99',
    monthly: '10.99',
  },
  features: {
    ...customBasicPlan.features,
    tracking: true,
  },
};

// 所有套餐配置 这里暂时先整理这些
export const allPlanConfigs: PlanConfig[] = [
  basicPlan,
  advancedPlan,
  proPlan,
  enterprisePlan,
  standardPlan,

  // 这几个plan的价格和限制可能不对 需要跟产品确认
  standardPrimaryPlan,
  customProPlan,
  discountAdvancePlan,
  businessPlan,

  // oberlo迁移用户特殊套餐
  customBasicPlan,
  customBasicWithTrackingPlan,
  customBasicWithProduct500UpPlan,
  customBasicWithProduct1000UpPlan,

  basicWithTrackingPlan,
  basicWithProduct500UpPlan,
  basicWithProduct1000UpPlan,

  customEnterprisePlan,
];

// pricing页面可见套餐
export const pricingPageVisiblePlan: PlanConfig[] = [
  basicPlan,
  advancedPlan,
  proPlan,
  enterprisePlan,
];
