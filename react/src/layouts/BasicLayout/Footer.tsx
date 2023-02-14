import { DefaultFooter } from '@ant-design/pro-layout';

export default function Footer() {
  return (
    <DefaultFooter
      copyright={`${new Date().getFullYear()} pv 平台`}
      links={[]}
    />
  );
}
