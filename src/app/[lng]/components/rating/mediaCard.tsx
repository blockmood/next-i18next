'use client';
import React from 'react';
import styles from './index.module.scss';
const COLOR = [
  '#DCEDC8',
  '#F8BBD0',
  '#B2EBF2',
  '#DCEDC8',
  '#F8BBD0',
  '#B2EBF2',
  '#DCEDC8',
  '#F8BBD0',
  '#B2EBF2',
];
export default function MediaCard({
  title,
  time,
  content,
  index,
}: {
  title: string;
  time: string;
  content: string;
  index: number;
}) {
  const openNew = () => {
    window.open('https://apps.shopify.com/dsers');
  };

  const randomNum = (minNum: number, maxNum: number) => {
    return parseInt(Math.random() * (maxNum - minNum + 1) + minNum + '');
  };

  return (
    <div className={styles.commentItem}>
      <div className={styles.boxV}>
        <div className={styles.name}>
          <div className={styles.icon} style={{ backgroundColor: COLOR[index] }}>
            <img src={`https://img.dsers.com/webSite/home/media/${index + 1}.svg`}></img>
          </div>
          <div className={styles.textBox}>
            <h6 className={styles.titleis5}>{title}</h6>
            <h6 className={styles.time}>{time}</h6>
          </div>
        </div>
        <div className={styles.more}></div>
      </div>
      <p className={styles.blockc}>{content}</p>
      <div className={styles.btnIcon}>
        <div className={styles.pl}>
          <img src={'https://img.dsers.com/webSite/home/media/zan.png'}></img>{' '}
          {randomNum(300, 1000)}
        </div>
        <div className={styles.commens}>
          <img src={'https://img.dsers.com/webSite/home/media/commens.png'}></img>
          {randomNum(300, 500)}
        </div>
        <div className={styles.share}>
          <a onClick={openNew}></a>
        </div>
      </div>
    </div>
  );
}
