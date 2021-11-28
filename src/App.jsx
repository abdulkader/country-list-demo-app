import React, { Suspense } from 'react';
import Loader from '@/components/Loader';
import Routes from '@/routes';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { appLoadingAction } from './store/app/action';

const App = () => {
  const dispatch = useAppDispatch();
  dispatch(appLoadingAction(false));
  return (
    <Suspense fallback={<Loader />}>
      <Routes />
    </Suspense>
  );
};

export default App;
