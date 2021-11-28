import { Toaster } from 'react-hot-toast';

const ToastNotification = () => {
  const toastOptions = {
    duration: 4000,
    position: 'top-center',
    className: 'text-sm px-2',
    duration: 5000,
  };
  return <Toaster toastOptions={toastOptions} />;
};

export default ToastNotification;
