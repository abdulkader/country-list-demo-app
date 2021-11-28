import React, { Fragment } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

const InputField = ({ hasError, errorMessage, className, ...props }) => {
  return (
    <Fragment>
      <input
        className={cx(
          'appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm',
          className
        )}
        {...props}
      />
      {hasError ? (
        <div className="py-2 block text-xs text-red-500 font-semibold">
          {errorMessage}
        </div>
      ) : null}
    </Fragment>
  );
};

InputField.defaultProps = {
  className: '',
  hasError: false,
  errorMessage: '',
};

InputField.propTypes = {
  className: PropTypes.string,
  hasError: PropTypes.bool,
  errorMessage: PropTypes.string,
};

export default InputField;
