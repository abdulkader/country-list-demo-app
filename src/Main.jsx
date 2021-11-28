import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import configureStore from '@/store';
import App from './App';
import ToastNotification from '@/components/ToastNotification';
import { useLocalStore } from '@/hooks/useLocalStore';
import { AUTH_KEY } from '@/constants';
import { initialState as USER_INITIAL_STATE } from '@/store/user/reducer';

const queryClient = new QueryClient();

const Main = () => {
  // Read User login status from localStore on App Load
  const localStore = useLocalStore();
  const userInfo = localStore.get(AUTH_KEY) || null;
  const store = configureStore({
    user: {
      loggedIn: userInfo?.rememberMe || false,
      user: userInfo,
    },
  });
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <BrowserRouter>
            <App />
            <ToastNotification />
          </BrowserRouter>
        </Provider>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

export default Main;
