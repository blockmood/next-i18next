'use client';
import { useState } from 'react';
import { useTranslation } from '../i18n/client';

export const Test = (props: any) => {
  const { t } = useTranslation(props.lng);
  const [count, setCount] = useState(10);

  return (
    <div>
      hello, {t('website_AffliateInsidepages_account10')} <br />
      <div
        onClick={() => {
          setCount((count) => (count += 10));
        }}
      >
        {count}
      </div>
    </div>
  );
};
