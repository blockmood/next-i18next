import React from 'react';
import { ICardDescriptionProps } from '../../interface';
import styles from './index.module.scss';

export function Default(props: ICardDescriptionProps) {
  return (
    <div className={styles.outContainer}>
      <div className="center-content">
        <div className={styles.container}>
          <h3>{props.title}</h3>
          <div className={styles.list}>
            {props.data.map((item, index) => (
              <div key={index} className={styles.item}>
                <div className={styles.left}>
                  <div className={styles.title}>{item.title}</div>
                  <div className={styles.secondTitle}>{item.secondTitle}</div>
                  <div className={styles.description}>{item.description}</div>
                </div>
                <div className={styles.right}>
                  <img src={item.image} alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
