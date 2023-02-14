import { Button, message, Result, Typography } from 'antd';
import { useState } from 'react';

const { Paragraph, Title } = Typography;

function ErrorFallback({ error }: { error: Error }) {
  const [showFeedback, setShowFeedback] = useState(false);

  return (
    <Result
      status="error"
      title="很抱歉，网页出现问题"
      subTitle="请尝试刷新，或者返回上一页重试。如果问题仍然存在，欢迎联系我们提交反馈。"
      extra={[
        <Button
          type="primary"
          key="back"
          onClick={() => {
            window.history.back();
            setTimeout(() => window.location.reload(), 500);
          }}
        >
          返回上一页
        </Button>,
        <Button
          key="feedback"
          onClick={() => {
            message.info('正在跳转 onCall 平台，提交时请携带本页面截图...', 10);
            setShowFeedback(true);
            setTimeout(() => {
              window.open(
                './',
              );
            }, 2000);
          }}
        >
          提交反馈
        </Button>,
      ]}
    >
      {showFeedback && (
        <div style={{ maxHeight: '60vh', overflow: 'auto' }}>
          <Paragraph>
            <Title level={4}>{`${error.name}: ${error.message}`}</Title>
          </Paragraph>
          <Paragraph style={{ whiteSpace: 'pre-line' }}>
            {error.stack?.split('\n').slice(1).join('\n')}
          </Paragraph>
        </div>
      )}
    </Result>
  );
}

export default ErrorFallback;
