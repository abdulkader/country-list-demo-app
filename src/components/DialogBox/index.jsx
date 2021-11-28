import PropTypes from 'prop-types';
import { DialogComponent } from '@syncfusion/ej2-react-popups';
import '@syncfusion/ej2-base/styles/material.css';
import '@syncfusion/ej2-react-popups/styles/material.css';

const DialogBox = ({ children, target, isModal, active, onClose }) => {
  return (
    <DialogComponent
      isModal={isModal}
      target={target}
      visible={active}
      close={onClose}
      overlayClick={onClose}
      width="50%"
    >
      {children}
    </DialogComponent>
  );
};

DialogBox.defaultProps = {
  target: '#dialog-target',
  isModal: true,
  active: false,
  onClose: () => {},
};

DialogBox.propTypes = {
  children: PropTypes.node.isRequired,
  target: PropTypes.string,
  isModal: PropTypes.bool,
  active: PropTypes.bool,
  onClose: PropTypes.func,
};

export default DialogBox;
