import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';

export const Toast = styled(ToastContainer).attrs({
  position: 'bottom-right',
  autoClose: 5000,
  hideProgressBar: true,
  pauseOnHover: true,
  draggable: true,
  closeOnClick: true,
})`
  .Toastify__toast {
    background-color: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.background};
    border-radius: 5px;
  }
  .Toastify__toast-body {
    background-color: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.background};
    font-weight: 500;
    line-height: 1.5;
    text-align: center;
    letter-spacing: 0.5px;
  }
  .Toastify__close-button {
    color: ${({ theme }) => theme.background};
  }
`;
