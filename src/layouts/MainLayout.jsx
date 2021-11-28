import { Fragment } from 'react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import PropTypes from 'prop-types';
import SEOComponent from '@/components/SEOComponent';

const MainLayout = ({ children, seoData }) => {
  return (
    <Fragment>
      <SEOComponent data={seoData} />
      <Header />
      <main className="flex flex-1 flex-col">{children}</main>
      <Footer />
    </Fragment>
  );
};

MainLayout.defaultProps = {
  seoData: {
    title: 'App',
    description: 'Country List Demo App',
    keywords: 'country list, react, redux, tailwindcss',
  },
};

MainLayout.propTypes = {
  seoData: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    keywords: PropTypes.string,
  }),
  children: PropTypes.node.isRequired,
};

export default MainLayout;
