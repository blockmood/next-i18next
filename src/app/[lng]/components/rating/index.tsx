'use client';
import React, { useEffect, useRef } from 'react';
import data from './card_data.json';
import styles from './index.module.scss';
import dynamic from 'next/dynamic';

const MediaCard = dynamic(() => import('./mediaCard'), { ssr: false });

export function Rating() {
  return (
    <div className={styles.commentCard}>
      <div className={styles.connentTitle}>
        <h2>What Our Customers Say about DSers?</h2>
      </div>
      <div className={styles.commentContainer}>
        <div className={styles.commentContent}>
          {data.map((i, index) => (
            <MediaCard
              key={i.name}
              title={i.name}
              content={i.comment}
              index={index}
              time={i.time}
            />
          ))}
        </div>
        <div className={styles.commentContent}>
          {data.map((i, index) => (
            <MediaCard
              key={i.name}
              title={i.name}
              content={i.comment}
              index={index}
              time={i.time}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
