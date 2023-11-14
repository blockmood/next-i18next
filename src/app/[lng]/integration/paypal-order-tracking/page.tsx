import { useTranslation } from '@/app/i18n';
import TopContainer from '@/app/[lng]/integration/components/TopContainer';
import ContentItem from '@/app/[lng]/integration/components/ContentItem';
import { PropsType } from '@/app/[lng]/integration/components/ContentItem';

import Banner from '@/app/[lng]/integration/components/Banner';
import Abstract from '../components/Abstract';
type ParamsType = {
  params: Record<string, string>;
};

const PaypalOrderTracking = async ({ params: { lng } }: ParamsType) => {
  const { t } = await useTranslation(lng);
  const topContentData: PropsType[] = [
    {
      imgPosition: 'right',
      img: 'https://img.dsers.com/webSite/integration/Sync-Order-Tracking-Number-PayPal.png',
      imgWidth: 448,
      title: t('website_PaypalOrderTracking_ConceptDescriptionTitle1'),
      describe: t('website_PaypalOrderTracking_ConceptDescriptionDescription1'),
    },
  ];

  const bottomContentData: PropsType[] = [
    {
      imgPosition: 'left',
      img: 'https://img.dsers.com/webSite/integration/real-time-paypal-order-update.png',
      imgWidth: 448,
      title: t('website_PaypalOrderTracking_ConceptDescriptionTitle3'),
      describe: t('website_PaypalOrderTracking_ConceptDescriptionDescription3'),
    },
  ];
  return (
    <>
      <TopContainer
        background="radial-gradient(farthest-side at 25% 55%,#003088,#0399e2)"
        img="https://img.dsers.com/webSite/integration/dsers-paypal-dropshipping-service.png"
        title={t('website_PaypalOrderTracking_MainBannerTitle')}
        describe={t('website_PaypalOrderTracking_MainBannerDescription')}
      />
      <Abstract
        title={t('website_PaypalOrderTracking_ConceptDescriptionTitle')}
        describe={t('website_PaypalOrderTracking_ConceptDescriptionDescription')}
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
        title={t('website_PaypalOrderTracking_ConceptDescriptionTitle2')}
        img="https://img.dsers.com/webSite/integration/dsers-paypal-dropshipping.png"
        background="radial-gradient(farthest-side at 25% 55%,#003088,#0399e2)"
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
export default PaypalOrderTracking;
