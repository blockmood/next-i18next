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

const WixDropshippingService = async ({ params: { lng } }: ParamsType) => {
  const { t } = await useTranslation(lng);
  const topContentData: PropsType[] = [
    {
      imgPosition: 'right',
      img: 'https://img.dsers.com/webSite/integration/EasytoFindBestSuppliers.png',
      imgWidth: 448,
      title: t('website_DSersWixDropshipping_ConceptDescriptionTitle1'),
      describe: t('website_DSersWixDropshipping_ConceptDescriptionDescription1'),
    },
    {
      imgPosition: 'left',
      img: 'https://img.dsers.com/webSite/integration/Save-Time-on-Managing-A-Batch-of-Orders.png',
      imgWidth: 448,
      title: t('website_DSersWixDropshipping_ConceptDescriptionTitle2'),
      describe: t('website_DSersWixDropshipping_ConceptDescriptionDescription2'),
    },
  ];

  const bottomContentData: PropsType[] = [
    {
      imgPosition: 'right',
      img: 'https://img.dsers.com/webSite/integration/set-up-global-shipping-methodspng.png',
      imgWidth: 448,
      title: t('website_DSersWixDropshipping_ConceptDescriptionTitle3'),
      describe: t('website_DSersWixDropshipping_ConceptDescriptionDescription3'),
    },
    {
      imgPosition: 'left',
      img: 'https://img.dsers.com/webSite/integration/key-information-from-suppliers.png',
      imgWidth: 448,
      title: t('website_DSersWixDropshipping_ConceptDescriptionTitle4'),
      describe: t('website_DSersWixDropshipping_ConceptDescriptionDescription4'),
    },
  ];
  return (
    <>
      <TopContainer
        background="radial-gradient(farthest-side at 25% 55%,#ff9d25,#ffcd2c)"
        img="https://img.dsers.com/webSite/integration/dsers-wix-dropshipping-service.png"
        title={t('website_DSersWixDropshipping_MainBannerTitle')}
        describe={t('website_DSersWixDropshipping_MainBannerDescription')}
      />
      <Abstract
        title={t('website_DSersWixDropshipping_ConceptDescriptionTitle')}
        describe={t('website_DSersWixDropshipping_ConceptDescriptionDescription')}
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
        title={t('website_DSersWixDropshipping_MainBannerTitle')}
        img="https://img.dsers.com/webSite/integration/dsers-wix-dropshipping.png"
        background="radial-gradient(farthest-side at 25% 55%,#ff9d25,#ffcd2c)"
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
export default WixDropshippingService;
