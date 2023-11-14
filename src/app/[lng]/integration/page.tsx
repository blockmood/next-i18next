import Link from 'next/link';
import { useTranslation } from '../../i18n';
import TopContainer from './components/TopContainer';
import ContentItem from './components/ContentItem';
import { PropsType } from './components/ContentItem';

type ParamsType = {
  params: Record<string, string>;
};

const Integration = async ({ params: { lng } }: ParamsType) => {
  const { t } = await useTranslation(lng);
  const contentData: PropsType[] = [
    {
      imgPosition: 'left',
      img: 'https://img.dsers.com/webSite/integration/AliExpress-Integration.png',
      imgWidth: 448,
      title: t('website_DSersECommerce_ConceptDescriptionTitle'),
      describe: t('website_DSersECommerce_ConceptDescriptionDescription'),
    },
    {
      imgPosition: 'right',
      img: 'https://img.dsers.com/webSite/integration/Shopify-Integration.png',
      imgWidth: 448,
      title: t('website_DSersECommerce_ConceptDescriptionTitle1'),
      describe: t('website_DSersECommerce_ConceptDescriptionDescription1'),
    },
    {
      imgPosition: 'left',
      img: 'https://img.dsers.com/webSite/integration/WooCommerce-Integration.png',
      imgWidth: 448,
      title: t('website_DSersECommerce_ConceptDescriptionTitle2'),
      describe: t('website_DSersECommerce_ConceptDescriptionDescription2'),
    },
    {
      imgPosition: 'right',
      img: 'https://img.dsers.com/webSite/integration/Wix-Integration.png',
      imgWidth: 448,
      title: t('website_DSersECommerce_ConceptDescriptionTitle3'),
      describe: t('website_DSersECommerce_ConceptDescriptionDescription3'),
    },
    {
      imgPosition: 'left',
      img: 'https://img.dsers.com/webSite/integration/PayPal-Integration.png',
      imgWidth: 448,
      title: t('website_DSersECommerce_ConceptDescriptionTitle4'),
      describe: t('website_DSersECommerce_ConceptDescriptionDescription4'),
    },
  ];
  return (
    <>
      <TopContainer
        background="linear-gradient(180deg,#ff8f00,#f7b500)"
        img="https://img.dsers.com/webSite/integration/integartion-top-new.png"
        title={t('website_DropshippingService_MainBannerTitle')}
        describe={t('website_DSersECommerce_MainBannerDescription')}
        text={t('website_DSersECommerce_MainBannerDescription1')}
      />
      <div style={{ paddingTop: '64px' }}>
        {contentData.map((item) => {
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
      </div>
    </>
  );
};

export default Integration;
