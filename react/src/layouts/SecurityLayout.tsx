import useUserInfo from '@/models/useUserInfo';
import loggerInit from '@/scripts/logger';
import { PageLoading } from '@ant-design/pro-layout';
import { Outlet } from '@umijs/max';
import { useEffect } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './components/ErrorFallback';

const isDev = process.env.NODE_ENV === 'development';

function SecurityLayout() {
  const { userInfo, updateUserInfo } = useUserInfo();

  useEffect(() => {
    if (!userInfo) {
      updateUserInfo();
    } else {
      // 初始化日志上报
      loggerInit({
        userId: userInfo.id,
      });
    }
  }, [userInfo]);

  const childrenWithWatermark = (
    <>
      <div
        style={
          isDev
            ? {}
            : {
                position: 'fixed',
                width: '100vw',
                height: '100vh',
                background:
                  'repeat url("xxxx")',
                backgroundSize: '350px, auto',
                zIndex: 10000000,
                pointerEvents: 'none',
              }
        }
      />
      <Outlet />
    </>
  );
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      {userInfo ? childrenWithWatermark : <PageLoading />}
    </ErrorBoundary>
  );
}

export default SecurityLayout;
