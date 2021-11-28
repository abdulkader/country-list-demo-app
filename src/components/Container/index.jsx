import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const Container = ({ className, children }) => {
  return <div className={cx('px-2 md:px-4', className)}>{children}</div>;
};

Container.defaultProps = {
  className: '',
};

Container.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Container;
