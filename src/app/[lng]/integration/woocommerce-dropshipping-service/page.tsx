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

const WoocommerceDropshippingService = async ({ params: { lng } }: ParamsType) => {
  const { t } = await useTranslation(lng);
  const topContentData: PropsType[] = [
    {
      imgPosition: 'right',
      img: 'https://img.dsers.com/webSite/integration/Add-Products-to-WooCommerce-Store-with-One-Click.png',
      imgWidth: 448,
      title: t('website_WooCommerceService_ConceptDescriptionTitle1'),
      describe: t('website_WooCommerceService_ConceptDescriptionDescription1'),
    },
    {
      imgPosition: 'left',
      img: 'https://img.dsers.com/webSite/integration/Process-and-Fulfill-WooCommerce-Dropshipping-Orders.png',
      imgWidth: 448,
      title: t('website_WooCommerceService_ConceptDescriptionTitle2'),
      describe: t('website_WooCommerceService_ConceptDescriptionDescription2'),
    },
  ];

  const bottomContentData: PropsType[] = [
    {
      imgPosition: 'right',
      img: 'https://img.dsers.com/webSite/integration/Manage-Multiple-WooCommerce-Stores-in-One-Place.png',
      imgWidth: 448,
      title: t('website_WooCommerceService_ConceptDescriptionTitle4'),
      describe: t('website_WooCommerceService_ConceptDescriptionDescription4'),
    },
    {
      imgPosition: 'left',
      img: 'https://img.dsers.com/webSite/integration/Free-Order-Shipping-Notification-Email.png',
      imgWidth: 448,
      title: t('website_WooCommerceService_ConceptDescriptionTitle5'),
      describe: t('website_WooCommerceService_ConceptDescriptionDescription5'),
    },
  ];
  return (
    <>
      <TopContainer
        background="radial-gradient(farthest-side at 25% 55%,#621a63,#7f54b3)"
        img="https://img.dsers.com/webSite/integration/dsers-woocommerce-dropshipping-service.png"
        title={t('website_WooCommerceService_MainBannerTitle')}
        describe="DSers Ecommerce Integration allows you to place hundreds of AliExpress dropshipping orders in seconds and to easily manage your online stores in one place with our advanced technology.

Connect your Shopify , WooCommerce stores with DSers and get started for free!"
      />
      <Abstract
        title={t('website_WooCommerceService_ConceptDescriptionTitle')}
        describe={t('website_WooCommerceService_ConceptDescriptionDescription')}
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
        title={t('website_WooCommerceService_ConceptDescriptionTitle3')}
        img="https://img.dsers.com/webSite/integration/dsers-woocommerce-dropshipping.png"
        background="radial-gradient(farthest-side at 25% 55%,#621a63,#7f54b3)"
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
export default WoocommerceDropshippingService;
