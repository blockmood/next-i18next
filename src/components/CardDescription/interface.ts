import React from 'react';
export interface ICardDescriptionProps {
  title?: string;
  responsive?: boolean;
  style?: React.CSSProperties;
  mobileType?: 'carousel' | 'arrange';
  data: {
    title?: React.ReactNode;
    secondTitle?: React.ReactNode;
    description?: React.ReactNode;
    image?: string;
  }[];
}
