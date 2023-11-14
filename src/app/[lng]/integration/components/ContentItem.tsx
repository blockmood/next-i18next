'use client';
import styles from './ContentItem.module.scss';
import React, { useEffect, useState } from 'react';
export type PropsType = {
  img: string;
  imgAlt?: '';
  imgWidth: number;
  imgPosition: 'left' | 'right';
  title?: string;
  describe?: string;
};
const ContentItem = ({ img, imgWidth, imgPosition, title, describe }: PropsType) => {
  const [imageWidth, setImageWidth] = useState(`${imgWidth}px`);
  // useEffect(() => {
  //   const handleResize = () => {
  //     // 如果窗口宽度小于图片宽度，则将图片宽度设置为100%，否则保持原来图片宽度
  //     if (window.innerWidth < imgWidth) {
  //       setImageWidth('100%');
  //     } else {
  //       setImageWidth(`${imgWidth}px`);
  //     }
  //   };

  //   window.addEventListener('resize', handleResize);

  //   handleResize();

  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);
  return (
    <div className={styles.ContentItem}>
      <div
        className={styles.item}
        style={{ flexDirection: imgPosition === 'right' ? 'row-reverse' : 'row' }}
      >
        <div className={styles.imgBox}>
          <img style={{ width: imageWidth }} src={img} />
        </div>
        <div className={styles.text}>
          <h3>{title}</h3>
          <p>{describe}</p>
        </div>
      </div>
    </div>
  );
};

export default ContentItem;
