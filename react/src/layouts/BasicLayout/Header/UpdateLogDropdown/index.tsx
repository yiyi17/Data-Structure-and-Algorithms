import { LocalNotice } from '@/scripts/constants';
import updateLog from '@/scripts/updateLog';
import { BellOutlined } from '@ant-design/icons';
import { useLocalStorageState } from 'ahooks';
import { Badge, Popover } from 'antd';
import { useMemo, useState } from 'react';
import styles from './index.less';
import UpdateLogComp from './UpdateLog';

/**
 * 更新日志展示组件
 */
function UpdateLogDropdown() {
  const [lastReadUpdate, setLastReadUpdate] = useLocalStorageState(
    LocalNotice.lastReadUpdate,
    0,
  );
  const hasNew = useMemo(() => lastReadUpdate < updateLog[0].dateNum, []);
  const [isShowDot, setIsShowDot] = useState(hasNew);

  // ======= 兼容旧 localStorage 字段 03.23 =======
  const [oldRead, setOldRead] = useLocalStorageState('lastReadUpdate', 0);
  if (oldRead) {
    setLastReadUpdate(+oldRead);
    setOldRead();
  }
  // =============================================

  return (
    <div>
      <Popover
        title="通知"
        content={<UpdateLogComp hasNew={hasNew} />}
        trigger="click"
      >
        <div
          style={{ cursor: 'pointer' }}
          onClick={() => {
            setIsShowDot(false);
            setLastReadUpdate(updateLog[0].dateNum);
          }}
          className={styles.triggerIcon}
        >
          <Badge dot={isShowDot}>
            <BellOutlined style={{ fontSize: 16 }} />
          </Badge>
        </div>
      </Popover>
    </div>
  );
}

export default UpdateLogDropdown;
