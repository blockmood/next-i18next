import React from 'react';
import { useIsMobile } from '@/app/utils/getResponsive';
import { CardCarousel, Default, CardArrange } from './components';
import { ICardDescriptionProps } from './interface';
import { detectServerDeviceType } from '@/app/utils/getDeviceType';

export function CardDescription(props: ICardDescriptionProps) {
  const device = detectServerDeviceType();

  if (props.responsive) {
    if (device.isMobile && props.mobileType === 'carousel') {
      return <CardCarousel {...props} />;
    } else if (device.isMobile && props.mobileType === 'arrange') {
      return <CardArrange {...props} />;
    }
  }
  return <Default {...props} />;
}
