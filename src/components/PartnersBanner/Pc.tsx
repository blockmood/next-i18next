import { Button } from 'antd';

interface Props {
  type?: string;
}
export function PartnersBanner({ type = '' }: Props) {
  return (
    <div>
      <h2>Become Partners With DSers</h2>

      <p>We’d like to partner with store experts, bloggers, KOLs, app developers,etc.</p>

      <Button>LOG IN AS A PARTNER</Button>
    </div>
  );
}
