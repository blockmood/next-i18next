'use client';

import { useState } from 'react';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import styles from './SeeMore.module.scss';
type propsType = {
  rows: any;
  plan: any;
};

const SeeMore = ({ rows, plan }: propsType) => {
  const [seeMore, setSeeMore] = useState(false);
  const closeSeeMore = () => {
    setSeeMore(false);
    const targetEle = document.getElementById('mobilePricing');
    if (targetEle) {
      targetEle.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
      });
    }
  };
  return (
    <>
      {!seeMore && (
        <div className={styles.seeMore} onClick={() => setSeeMore(true)}>
          SEE MORE <DownOutlined />
        </div>
      )}
      {seeMore ? (
        <>
          {rows.map((row: any) => {
            return (
              <div className={styles.rowItem} key={row.id}>
                <div className={styles.titleBox}>
                  <div className={styles.featureTitle}>{row.title}</div>
                  {row.desc ? <div className={styles.featureDesc}>{row.desc}</div> : null}
                </div>
                <div className={styles.row}>{row.dataRender ? row.dataRender(plan) : ''}</div>
              </div>
            );
          })}
          <div className={styles.seeMore} onClick={closeSeeMore}>
            COLLAPSE <UpOutlined />
          </div>
        </>
      ) : null}
    </>
  );
};

export default SeeMore;
