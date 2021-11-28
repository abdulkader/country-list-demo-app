import React from 'react';
import PropTypes from 'prop-types';

const CountryDetailsRow = ({ label, value }) => {
  return (
    <div className="flex flex-nowrap justify-between border border-gray-100">
      <div className="p-2 w-1/2 border-r border-gray-100 bg-gray-50 font-bold">
        {label}
      </div>
      <div className="p-2 w-1/2">{value}</div>
    </div>
  );
};

CountryDetailsRow.propTypes = {
  label: PropTypes.string,
  value: PropTypes.node,
};

export default CountryDetailsRow;
