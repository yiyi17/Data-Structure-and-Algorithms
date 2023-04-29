import Avatar from './AvatarDropdown';
import styles from './index.less';
import UpdateLogDropdown from './UpdateLogDropdown/index';

function Right() {
  return (
    <div className={styles.right}>
      <span className={styles.links}>
        <a
          href=""
          target="_blank"
          rel="noreferrer"
        >
          使用说明
        </a>
        <span style={{ margin: '0 10px' }}>|</span>
        <a
          href="xxx"
          target="_blank"
          rel="noreferrer"
        >
          提交反馈
        </a>
      </span>
      <UpdateLogDropdown />
      <Avatar />
    </div>
  );
}

export default Right;
