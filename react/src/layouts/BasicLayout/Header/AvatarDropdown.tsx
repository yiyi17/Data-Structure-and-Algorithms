import { ROLE_CNAME } from '@/components/Authorized/constants';
import useUserInfo from '@/models/useUserInfo';
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Tag } from 'antd';
// import HeaderDropdown from './Dropdown';
import styles from './index.less';


function AvatarDropdown() {
  const { userInfo } = useUserInfo();
  return (
    <div>
      <span className={`${styles.action} ${styles.account}`}>
        <Avatar
          size={30}
          className={styles.avatar}
          src={
            userInfo.avatar
          }
          alt="avatar"
        />
        <span className={`${styles.name} anticon`}>{userInfo.name}</span>
        {/* <Divider type="vertical" /> */}
        <Tag icon={<UserOutlined />} color="#2f84eb" className={styles.role}>
          {ROLE_CNAME.get(userInfo.role)}
        </Tag>
      </span>
    </div>
  );
}

export default AvatarDropdown;
