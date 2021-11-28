import LoginForm from '@/components/LoginForm';
import { AUTH_KEY } from '@/constants';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { useLocalStore } from '@/hooks/useLocalStore';
import MainLayout from '@/layouts/MainLayout';
import { loginAction } from '@/store/user/action';

const LoginPage = () => {
  const localStore = useLocalStore();
  const dispatch = useAppDispatch();
  const handleSubmit = (values) => {
    // simple base 64 encoding instead of plain storage
    // in production, we shall use crypto-js library in case of storing user information
    const userInfo = {
      password: btoa(values.password),
      username: btoa(values.username),
      fullname: values.username?.split('@')?.[0],
      rememberMe: values.rememberMe,
    };

    // Store user data in local store
    localStore.set(AUTH_KEY, userInfo);
    dispatch(loginAction(userInfo));
  };
  return (
    <MainLayout>
      <LoginForm onSubmit={handleSubmit} />
    </MainLayout>
  );
};

export default LoginPage;
