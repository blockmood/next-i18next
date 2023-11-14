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

const AliexpressDropshippingService = async ({ params: { lng } }: ParamsType) => {
  const { t } = await useTranslation(lng);
  const topContentData: PropsType[] = [
    {
      imgPosition: 'right',
      img: 'https://img.dsers.com/webSite/integration/find-best-suppliers.png',
      imgWidth: 448,
      title: t('website_DropshippingService_ConceptDescriptionTitle1'),
      describe: t('website_DropshippingService_ConceptDescriptionDescription1'),
    },
    {
      imgPosition: 'left',
      img: 'https://img.dsers.com/webSite/integration/Fast-to-Place-Orders-to-AliExpress.png',
      imgWidth: 448,
      title: t('website_DropshippingService_ConceptDescriptionTitle2'),
      describe: t('website_DropshippingService_ConceptDescriptionDescription2'),
    },
  ];

  const bottomContentData: PropsType[] = [
    {
      imgPosition: 'right',
      img: 'https://img.dsers.com/webSite/integration/One-Click-to-Import-Products-from-AliExpress.png',
      imgWidth: 448,
      title: t('website_DropshippingService_ConceptDescriptionTitle3'),
      describe: t('website_DropshippingService_ConceptDescriptionDescription3'),
    },
    {
      imgPosition: 'left',
      img: 'https://img.dsers.com/webSite/integration/sync-order-status-and-tracking-numbers.png',
      imgWidth: 448,
      title: t('website_DropshippingService_ConceptDescriptionTitle4'),
      describe: t('website_DropshippingService_ConceptDescriptionDescription4'),
    },
  ];

  return (
    <>
      <TopContainer
        background="radial-gradient(farthest-side at 25% 55%,#dd2c00,#ff9800)"
        img="https://img.dsers.com/webSite/integration/dsers-aliexpress-dropshipping-service.png"
        title={t('website_DropshippingService_MainBannerTitle')}
        describe={t('website_DropshippingService_MainBannerDescription')}
      />
      <Abstract
        title={t('website_DropshippingService_ConceptDescriptionTitle')}
        describe={t('website_DropshippingService_ConceptDescriptionDescription')}
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
        title={t('website_DropshippingService_MainBannerTitle')}
        img="https://img.dsers.com/webSite/integration/dsers-aliexpress-dropshipping.png"
        background="radial-gradient(farthest-side at 25% 55%,#dd2c00,#ff9800)"
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
export default AliexpressDropshippingService;
