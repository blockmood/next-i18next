import Image from 'next/image';
import React from 'react';

interface ItemProps {
  title: string | React.ReactNode;
  text: string | React.ReactNode;
  background?: string;
  imageHeight?: number;
  imageUrl: any;
  button?: React.ReactNode;
}

export function TextImageList({ items }: { items: ItemProps[] }) {
  const renderItem = (item: ItemProps, index: number) => {
    const isImageLeft = index % 2 === 0;
    const isImageRight = index % 2 === 1;
    const isSmallScreen = true;

    const children = [
      <div key={1} style={{ width: '50%' }}>
        <h2>{item.title}</h2>
        <div>{item.text}</div>
        {item?.button}
      </div>,
      <Image
        key={2}
        src={item.imageUrl}
        alt=""
        height={item.imageHeight}
        style={{ float: isImageLeft ? 'right' : 'left' }}
      />,
    ];

    return (
      <div style={{ background: item.background || '#FFFFFF' }} key={index}>
        <div
          style={{
            maxWidth: 1140,
            margin: 'auto',
            padding: '64px 0 40px',
            boxSizing: 'border-box',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          {isImageLeft && children}
          {isImageRight && children.reverse()}
        </div>
      </div>
    );
  };

  return <div>{items.map((item, index) => renderItem(item, index))}</div>;
}
