import { ModalContainer, ModalContent, ModalExit } from './styles';

interface ModalProps {
  children: React.ReactNode;
  show: boolean;
  setShow: (show: boolean) => void;
}

export const Modal = ({ children, show, setShow }: ModalProps) => {
  return (
    <ModalContainer show={show} onHide={setShow} centered>
      <ModalExit onClick={() => setShow(false)}>X</ModalExit>
      <ModalContent>{children}</ModalContent>
    </ModalContainer>
  );
};
