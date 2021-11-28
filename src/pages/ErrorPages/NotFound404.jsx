import React from 'react';
import MainLayout from '@/layouts/MainLayout';

const NotFound404 = () => {
  const seoData = {
    title: 'Page Not found - 404',
  };
  return <MainLayout seoData={seoData}>NotFound404</MainLayout>;
};

export default NotFound404;
