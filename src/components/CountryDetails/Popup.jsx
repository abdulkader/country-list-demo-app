import PropTypes from 'prop-types';
import DialogBox from '@/components/DialogBox';

const CountryDetailsPopup = ({ country, onClose }) => {
  return (
    <DialogBox active onClose={onClose} target="#data-table">
      <div className="flex flex-nowrap justify-between border border-gray-100 bg-gray-50 font-bold">
        <div className="p-2 w-1/5 border-r border-gray-100">Language</div>
        <div className="p-2 w-2/5 border-r border-gray-100">Common Name</div>
        <div className="p-2 w-2/5">Official Name</div>
      </div>

      <div className="border-b border-gray-100">
        <div className="flex flex-nowrap justify-between border border-gray-100 border-b-0">
          <div className="p-2 w-1/5 border-r border-gray-100">English</div>
          <div className="p-2 w-2/5 border-r border-gray-100">
            {country?.name?.common}
          </div>
          <div className="p-2 w-2/5">{country?.name?.official}</div>
        </div>
        {Object.entries(country?.name?.nativeName).map(
          ([key, { common, official }]) => (
            <div
              className="flex flex-nowrap justify-between border border-gray-100 border-b-0"
              key={key}
            >
              <div className="p-2 w-1/5 border-r border-gray-100">
                Native({key})
              </div>
              <div className="p-2 w-2/5 border-r border-gray-100">{common}</div>
              <div className="p-2 w-2/5">{official}</div>
            </div>
          )
        )}
      </div>
    </DialogBox>
  );
};

CountryDetailsPopup.propTypes = {
  onClose: PropTypes.func.isRequired,
  country: PropTypes.object.isRequired,
};

export default CountryDetailsPopup;
