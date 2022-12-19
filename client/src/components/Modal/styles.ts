import styled from 'styled-components';
import Modal from 'react-bootstrap/Modal';

export const ModalContainer = styled(Modal)`
  background: ${({ theme }) => theme.background};
  border: none;
  color: ${({ theme }) => theme.text};
  @media (max-width: 768px) {
  }

  .modal-content {
    background: transparent;
  }
`;

export const ModalContent = styled(Modal.Body).attrs({
  className: 'justify-content-center align-items-center text-center',
})``;

export const ModalExit = styled.div`
  color: ${({ theme }) => theme.text};
  cursor: pointer;
`;
