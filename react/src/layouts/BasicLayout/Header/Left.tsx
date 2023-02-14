import { RouteContext } from '@ant-design/pro-layout';
import { Helmet } from '@umijs/max';
import { useContext, useState } from 'react';
import styles from './index.less';

function Left() {
  const [title, setTitle] = useState();
  const { title: routeName } = useContext(RouteContext);

  return (
    <>
      <Helmet onChangeClientState={(state: any) => setTitle(state.title)} />
      <div className={styles.left}>{title || routeName}</div>
    </>
  );
}

export default Left;
