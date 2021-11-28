import { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '@/hooks/useAppSelector';
import Loader from '@/components/Loader';

const ProtectedLayout = ({ children, isProtected, isControlled }) => {
  const { loading } = useAppSelector((state) => state.app);
  const { loggedIn, user } = useAppSelector((state) => state.user);
  if (loading) {
    return <Loader />;
  }
  if (isProtected && (!loggedIn || !user?.username)) {
    return <Navigate to="/login" replace={true} />;
  }
  if (isControlled && loggedIn && user?.username) {
    return <Navigate to="/" replace={true} />;
  }
  return <Fragment>{children}</Fragment>;
};

ProtectedLayout.propTypes = {
  isProtected: false,
  isControlled: false,
};

ProtectedLayout.propTypes = {
  isProtected: PropTypes.bool,
  isControlled: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default ProtectedLayout;
