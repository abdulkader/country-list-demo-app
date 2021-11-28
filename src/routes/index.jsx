import React, { lazy, Fragment } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import ProtectedLayout from '@/layouts/ProtectedLayout';
import Dashboard from '@/pages/Dashboard';
import LoginPage from '@/pages/Auth/Login';
import CountryDetailsPage from '@/pages/Country';
import NotFound404 from '@/pages/ErrorPages/NotFound404';

const RouterLayout = () => (
  <Fragment>
    <Outlet />
  </Fragment>
);

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<RouterLayout />}>
        <Route
          index
          element={
            <ProtectedLayout isProtected>
              <Dashboard />
            </ProtectedLayout>
          }
        />
        <Route
          path="login"
          element={
            <ProtectedLayout isControlled>
              <LoginPage />
            </ProtectedLayout>
          }
        />
        <Route
          path="country/:code"
          element={
            <ProtectedLayout isProtected>
              <CountryDetailsPage />
            </ProtectedLayout>
          }
        />
        <Route path="*" element={<NotFound404 />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
