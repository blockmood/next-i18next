import Image from 'next/image';
import { Row, Col } from 'antd';

interface Props {
  title: string;
  text: string;
  imageUrl: any;
  imageHeight?: number;
}
export function SecondaryBanner({ imageUrl, imageHeight, text, title }: Props) {
  return (
    <Row>
      <Col span={12}>
        <h2>{title}</h2>
        <p>{text}</p>
      </Col>
      <Col span={12}>
        <Image src={imageUrl} height={imageHeight} alt=""></Image>
      </Col>
    </Row>
  );
}
