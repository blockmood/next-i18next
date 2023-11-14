import Link from 'next/link';
import { useTranslation } from '../../i18n';
import dropshipping from './images/dropshipping.png';
import program from './images/program.png';
import solutionapps from './images/solutionapps.png';
import { Row, Col, Button } from 'antd';
import React from 'react';
import { TextImageList } from '@/components/TextImageList';
import { QuestionsHelp } from '@/components/QuestionsHelp';
import { StartWithDSers } from '@/components/StartWithDSers';
type ParamsType = {
  params: Record<string, string>;
};

const items = [
  {
    title: 'Become a partner',
    text: 'In a very competitive world, it’s always important to find some good allies. DSers is proud to be working with the top leading E-commerce apps and plugins but also some of most respected authorities in the dropshipping industry. Applications, Website, Bloggers, YouTubers and KOLs are part of the DSers dropshipping ecosystem and we are always happy to be working with them. Become a DSers Partner',
    imageUrl: program,
    imageHeight: 308,
  },
  {
    title: 'DSers Partner Program',
    text:
      'DSers dropshipping is always looking for new interesting apps and people to work with. With over 120k installations, on Shopify, Wix and WooCommerce, DSers is a dropshipping solution leader, happy to work with not only other dropshipping plugin and application as partners, but also dropshipper, bloggers and KOL as affiliates.\n' +
      '\n' +
      'Get some extra revenue, increase your traffic, spread the word about DSers dropshipping and work with us!',
    imageUrl: dropshipping,
    background: '#f5f5f5',
    button: <Button>asasasa</Button>,
    imageHeight: 338,
  },
  {
    title: 'Partner Apps',
    text: 'Discover all the apps recommended by DSers to help you grow your online business. From marketing tools, to reviews, including website and page builder, but also data analysis, those apps and plugins will insure that you don’t leave anything to chance to run and manage a successful dropshipping business',
    imageUrl: solutionapps,
    button: <Button>asasasa</Button>,
    imageHeight: 232,
  },
];

export default async function Page({ params: { lng } }: ParamsType) {
  const { t } = await useTranslation(lng);
  return (
    <>
      <h1>Hi {t('accounts_accountsCommon_createAccount')}</h1>
      <Link href={`/${lng}`}>{t('back-to-home')}</Link>

      <div>
        <TextImageList items={items} />
        <QuestionsHelp />
        <StartWithDSers />
      </div>
    </>
  );
}
