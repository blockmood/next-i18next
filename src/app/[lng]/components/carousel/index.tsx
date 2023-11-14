'use client';
import { Carousel } from 'antd';
import React, { useState } from 'react';
import classnames from 'classnames';
import styles from './index.module.scss';

export function CarouselSpecial() {
  const [isenter, setIsenter] = useState(true);

  const carouselBefore = () => {
    setIsenter(false);
    setTimeout(() => {
      setIsenter(true);
    }, 100);
  };
  return (
    <div className={styles.homeCon}>
      <div style={{ margin: '0 auto', width: 1140 }}>
        <div className={styles.titleBoxW}>
          <div className={styles.bot}>
            <p className={styles.titleBoxW}>DSers Makes It Easy to Dropship with AliExpress!</p>
            <p className={styles.titleBoxW}>
              Over 4.5M Dropshipping Users Helped to Start and Scale Ecommerce Stores.
            </p>
          </div>
        </div>

        <Carousel
          className={styles.carouselHome}
          autoplay
          beforeChange={carouselBefore}
          effect="fade"
          autoplaySpeed={4000}
        >
          <div>
            <div className={styles.animtecontainer}>
              <div
                id="asd"
                className={classnames({
                  ['animate__fadeInLeft']: isenter,
                  ['animate__zoomOut']: !isenter,
                  ['animate__animated']: true,
                  [styles.textContainer]: true,
                })}
              >
                <div className={styles.textTitle}>sdijsaidafid</div>
                <div className={styles.textSection}>sdijsaidafid</div>
                <a className={styles.link} target="_blank">
                  sdijsaidafid
                </a>
              </div>
              <div className={styles.imgContainer}>
                <img
                  className={classnames({
                    ['animate__fadeIn']: isenter,
                    ['animate__fadeOut']: !isenter,
                    ['animate__animated']: true,
                    [styles.imgBack]: true,
                  })}
                  src={'https://img.dsers.com/webSite/home/carousels/background.png'}
                  alt=""
                />
                <img
                  className={classnames({
                    ['animate__fadeInLeft']: isenter,
                    ['animate__fadeOutLeft']: !isenter,
                    ['animate__animated']: true,
                    [styles.imgOrder]: true,
                  })}
                  src={'https://img.dsers.com/webSite/home/carousels/order.png'}
                  alt=""
                />
                <img
                  className={classnames({
                    ['animate__fadeInRight']: isenter,
                    ['animate__fadeOutRight']: !isenter,
                    ['animate__animated']: true,
                    [styles.imgGoods]: true,
                  })}
                  src={'https://img.dsers.com/webSite/home/carousels/goods.png'}
                  alt=""
                />
                <img
                  className={
                    classnames({
                      ['animate__zoomInLeft']: isenter,
                      ['animate__zoomOutLeft']: !isenter,
                      ['animate__animated']: true,
                      [styles.imgArrowhead]: true,
                    })
                    // isenter
                    //   ? 'img-arrowhead animate__animated animate__zoomInLeft'
                    //   : 'img-arrowhead animate__animated animate__zoomOutLeft'
                  }
                  src={'https://img.dsers.com/webSite/home/carousels/arrowhead.png'}
                  alt=""
                />
              </div>
            </div>
          </div>

          <div>
            <div className={styles.animtecontainer}>
              <div
                id="asd"
                className={classnames({
                  ['animate__fadeInLeft']: isenter,
                  ['animate__zoomOut']: !isenter,
                  ['animate__animated']: true,
                  [styles.textContainer]: true,
                })}
              >
                <div className={styles.textTitle}>dhbguenf</div>
                <div className={styles.textSection}>dhbguenf</div>
                <a className={styles.link}>dhbguenf</a>
              </div>
              <div className={styles.imgContainer}>
                <img
                  className={
                    isenter
                      ? 'img-back2 animate__animated animate__fadeIn'
                      : 'img-back2 animate__animated animate__fadeOut'
                  }
                  src={'https://img.dsers.com/webSite/home/carousels/background.png'}
                  alt=""
                />
                <img
                  className={
                    isenter
                      ? 'img-goods animate__animated animate__fadeInRight'
                      : 'img-goods animate__animated animate__fadeOutRight'
                  }
                  src={'https://img.dsers.com/webSite/home/carousels/card.png'}
                  alt=""
                />
                <img
                  className={
                    isenter
                      ? 'img-stars animate__animated animate__zoomIn'
                      : 'img-stars animate__animated animate__zoomOut'
                  }
                  src={'https://img.dsers.com/webSite/home/carousels/stars.png'}
                  alt=""
                />
                <img
                  className={
                    isenter
                      ? 'img-247 animate__animated animate__fadeInUp'
                      : 'img-247 animate__animated animate__fadeOutUp'
                  }
                  src={'https://img.dsers.com/webSite/home/carousels/247.png'}
                  alt=""
                />
              </div>
            </div>
          </div>

          <div>
            <div className={styles.animtecontainer}>
              <div
                id="asd"
                className={
                  isenter
                    ? 'animate__animated animate__fadeInLeft text-container'
                    : 'animate__animated animate__zoomOut text-container'
                }
              >
                <div className={styles.textTitle}>dhbguenf</div>
                <div className={styles.textSection}>dhbguenf</div>
                <a className={styles.link}>dhbguenf</a>
              </div>
              <div className={styles.imgContainer}>
                <img
                  className={
                    isenter
                      ? 'img-back animate__animated animate__fadeIn'
                      : 'img-back animate__animated animate__fadeOut'
                  }
                  src={'https://img.dsers.com/webSite/home/carousels/background.png'}
                  alt=""
                />
                <img
                  className={
                    isenter
                      ? 'img-card01 animate__animated animate__fadeInRight'
                      : 'img-card01 animate__animated animate__fadeOutRight'
                  }
                  src={'https://img.dsers.com/webSite/home/carousels/card01.png'}
                  alt=""
                />
                <img
                  className={
                    isenter
                      ? 'img-platform animate__animated animate__fadeInLeft'
                      : 'img-platform animate__animated animate__fadeOutLeft'
                  }
                  style={{ width: '60%' }}
                  src={'https://img.dsers.com/webSite/home/carousels/platform.png'}
                  alt=""
                />
                <img
                  className={
                    isenter
                      ? 'img-all_store animate__animated animate__fadeInUp'
                      : 'img-all_store animate__animated animate__fadeOutUp'
                  }
                  src={'https://img.dsers.com/webSite/home/carousels/all_store.png'}
                  alt=""
                />
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}
