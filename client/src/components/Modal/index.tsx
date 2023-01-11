import { ModalContainer, ModalContent, ModalExit } from './styles';
import { BsX } from 'react-icons/bs';

interface ModalProps {
  children: React.ReactNode;
  show: boolean;
  setShow: (show: boolean) => void;
}

export const Modal = ({ children, show, setShow }: ModalProps) => {
  return (
    <ModalContainer show={show} onHide={setShow} centered>
      <ModalExit onClick={() => setShow(false)}>
        <BsX size={30} />
      </ModalExit>
      <ModalContent>{children}</ModalContent>
    </ModalContainer>
  );
};
