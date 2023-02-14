import cx from 'classnames';
import type { FC } from 'react';
import styles from './style.less';

interface TitleProps {
  name: string;
  className?: StyleSheet | string;
}

const Title: FC<TitleProps> = ({ name, className }) => {
  return <div className={cx(styles.title, className)}>{name}</div>;
};

export default Title;
