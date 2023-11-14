import React from 'react';
import styles from './index.module.scss';
import { Button, Input } from 'antd';

export function Banner() {
  const renderList = [
    {
      icon: 'https://img.dsers.com/webSite/home/local_AEl-24px.svg',
      text: 'AliExpress official e-Commerce solution',
    },
    {
      icon: 'https://img.dsers.com/webSite/home/local_Price-24px.svg',
      text: 'Process orders to AliExpress and make payment in bulk',
    },
    {
      icon: 'https://img.dsers.com/webSite/home/local_Supply-24px.svg',
      text: 'Find multiple AliExpress supplier options for a product in one click',
    },
  ];
  return (
    <div className={styles.banner}>
      <div className="center-conntent">
        <div className={styles.container}>
          <div className={styles.top}>
            <div className={styles.left}>
              <h1>The Best AliExpress Dropshipping Tool For E-Commerce</h1>
              <div className={styles.list}>
                {renderList.map((item) => (
                  <div key={item.icon} className={styles.item}>
                    <img src={item.icon} alt="" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.right}>
              <video
                src={'https://images.dsers.com/video/video.MP4'}
                controls
                autoPlay
                muted
              ></video>
            </div>
          </div>
          <div className={styles.bottom}>
            <div className={styles.input}>
              <Input className={styles.input} type="text" />
              <Button className={styles.btn} size="large" type="primary">
                FREE INSTALL
              </Button>
            </div>
            <div className={styles.inputText}>
              Enter your email address to receive a free dropshipping guide
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
