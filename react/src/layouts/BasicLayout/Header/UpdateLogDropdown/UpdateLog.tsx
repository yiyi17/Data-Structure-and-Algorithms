import updateLog from '@/scripts/updateLog';
import { Badge } from 'antd';
import styles from './index.less';

export default function UpdateLog({ hasNew = false }) {
  return (
    <div className={styles.logContainer}>
      {updateLog.map((log, idx) => (
        <div style={{ color: '#999' }} key={idx}>
          <h4 style={{ color: '#666' }}>
            {log.date} 更新日志
            {hasNew && idx === 0 && (
              <Badge
                count="new"
                size="small"
                style={{ backgroundColor: '#52c41a' }}
                className={styles.newTag}
              />
            )}
          </h4>
          <p>
            {log.content.split('\n').map((line) => (
              <div key={line}>{line}</div>
            ))}
          </p>
        </div>
      ))}
      <div className={styles.bottom}>- 到底了 -</div>
    </div>
  );
}
