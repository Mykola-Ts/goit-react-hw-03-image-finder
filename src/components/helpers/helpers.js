import { IoWarningOutline } from 'react-icons/io5';

export const toastOptions = {
  duration: 5000,
  success: {
    style: {
      color: 'var(--white-color)',
      background: 'rgba(0, 128, 0, 0.7)',
    },
    iconTheme: {
      primary: 'var(--white-color)',
      secondary: 'green',
    },
  },
  error: {
    style: {
      color: 'var(--white-color)',
      background: 'rgba(255, 85, 73, 0.9)',
    },
    iconTheme: {
      primary: 'var(--white-color)',
      secondary: 'rgb(255, 85, 73)',
    },
  },
};

export const toastWarningOptions = {
  style: {
    color: 'var(--white-color)',
    background: '#eebf31',
  },
  icon: <IoWarningOutline size={24} />,
};

export const toastContainerStyle = {
  top: 90,
};
