import { Button } from 'antd';
interface Props {
  title: string;
  type: string;
  theme: 'dark' | 'light';
}
export function StartWithDSers({ type = '1', title = '', theme = 'light' }: Props) {
  return (
    <div>
      <h2>{title}</h2>
      <Button>TRY IT FREE</Button>
    </div>
  );
}
