import { useRequest } from '@umijs/max';
import qs from 'qs';

const Login = () => {
  const search = window.location.search?.replace('?', '');
  const { code } = qs.parse(search);

  useRequest(`/api/v1/login?code=${code}`, {
    onError(e) {
      console.log(e);
    },
    throwOnError: true,
    onSuccess: () => {
      window.location.href = '/nav1/home';
    },
  });

  return null;
};

export default Login;
