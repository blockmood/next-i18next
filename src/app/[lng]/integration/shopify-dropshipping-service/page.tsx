import Link from 'next/link';
import { useTranslation } from '@/app/i18n';
import TopContainer from '@/app/[lng]/integration/components/TopContainer';
import ContentItem from '@/app/[lng]/integration/components/ContentItem';
import { PropsType } from '@/app/[lng]/integration/components/ContentItem';

import Banner from '@/app/[lng]/integration/components/Banner';
import Abstract from '../components/Abstract';
type ParamsType = {
  params: Record<string, string>;
};

const ShopifyDropshippingService = async ({ params: { lng } }: ParamsType) => {
  const { t } = await useTranslation(lng);
  const topContentData: PropsType[] = [
    {
      imgPosition: 'right',
      img: 'https://img.dsers.com/webSite/integration/One-Click-to-Publish-Products-to-Shopify.png',
      imgWidth: 448,
      title: t('website_DSersShopifyDrop_ConceptDescriptionTitle2'),
      describe: t('website_DSersShopifyDrop_ConceptDescriptionDescription2'),
    },
    {
      imgPosition: 'left',
      img: 'https://img.dsers.com/webSite/integration/sync-shopify-orders.png',
      imgWidth: 448,
      title: t('website_DSersShopifyDrop_ConceptDescriptionTitle3'),
      describe: t('website_DSersShopifyDrop_ConceptDescriptionDescription3'),
    },
  ];

  const bottomContentData: PropsType[] = [
    {
      imgPosition: 'right',
      img: 'https://img.dsers.com/webSite/integration/apply-pricing-rules-to-shopify-products.png',
      imgWidth: 448,
      title: t('website_DSersShopifyDrop_ConceptDescriptionTitle4'),
      describe: t('website_DSersShopifyDrop_ConceptDescriptionDescription4'),
    },
    {
      imgPosition: 'left',
      img: 'https://img.dsers.com/webSite/integration/shipping-confirmation-email.png',
      imgWidth: 448,
      title: t('website_DSersShopifyDrop_ConceptDescriptionTitle5'),
      describe: t('website_DSersShopifyDrop_ConceptDescriptionDescription5'),
    },
  ];
  return (
    <>
      <TopContainer
        background="radial-gradient(farthest-side at 25% 55%,#5a863e,#8db849)"
        img="https://img.dsers.com/webSite/integration/dsers-shopify-dropshipping-service.png"
        title={t('website_DSersShopifyDrop_MainBannerTitle')}
        describe={t('website_DSersShopifyDrop_MainBannerDescription')}
      />
      <Abstract
        title={t('website_DSersShopifyDrop_ConceptDescriptionTitle1')}
        describe={t('website_DSersShopifyDrop_ConceptDescriptionDescription1')}
      />
      {topContentData.map((item) => {
        return (
          <ContentItem
            key={item.title}
            imgPosition={item.imgPosition}
            img={item.img}
            imgWidth={item.imgWidth}
            title={item.title}
            describe={item.describe}
          />
        );
      })}
      <Banner
        title={t('website_DSersShopifyDrop_MainBannerTitle')}
        img="https://img.dsers.com/webSite/integration/dsers-shopify-dropshipping.png"
        background="radial-gradient(farthest-side at 25% 55%,#5a863e,#8db849)"
      />
      {bottomContentData.map((item) => {
        return (
          <ContentItem
            key={item.title}
            imgPosition={item.imgPosition}
            img={item.img}
            imgWidth={item.imgWidth}
            title={item.title}
            describe={item.describe}
          />
        );
      })}
    </>
  );
};
export default ShopifyDropshippingService;
