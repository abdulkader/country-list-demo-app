import { Fragment } from 'react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import PropTypes from 'prop-types';

const MainLayout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <main className="flex flex-1 flex-col">{children}</main>
      <Footer />
    </Fragment>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
