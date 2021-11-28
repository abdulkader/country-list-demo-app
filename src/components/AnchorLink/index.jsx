import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const AnchorLink = ({ href, className, children }) => {
  return (
    <Link to={href} className={className}>
      {children}
    </Link>
  );
};

AnchorLink.defaultProps = {
  className: '',
};

AnchorLink.propTypes = {
  href: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default AnchorLink;
