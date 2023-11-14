import React from 'react';
import { Carousel } from 'antd';
import { ICardDescriptionProps } from '../../interface';
import styles from './index.module.scss';

export function CardCarousel(props: ICardDescriptionProps) {
  return (
    <div className={styles.container} style={props.style}>
      <h3>{props.title}</h3>
      <Carousel autoplay dots={{ className: styles.dots }}>
        {props.data.map((item, index) => (
          <div key={index} className={styles.items}>
            <img src={item.image} alt="" />
            <div className={styles.content}>
              <div className={styles.title}>{item.title}</div>
              <div className={styles.secondTitle}>{item.secondTitle}</div>
              <div className={styles.description}>{item.description}</div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
