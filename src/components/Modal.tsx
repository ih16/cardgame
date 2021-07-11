import React, {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';

interface ModalProps {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  children?: JSX.Element;
}

const ModalBackdrop = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  background-color: rgba(1, 1, 1, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99999;
`;

const ModalContent = styled.div`
  width: 40rem;
  height: 25rem;
  padding: 2.5rem 2rem;
  background-color: white;
  border-radius: 0.5rem;
`;

const Modal: FC<ModalProps> = ({
  showModal,
  setShowModal,
  children,
}: ModalProps) => {
  const [showModalContent, setModalContent] = useState(false);

  useEffect(() => {
    if (!showModalContent) setShowModal(false);
  }, [showModalContent]);

  return (
    <CSSTransition
      in={showModal}
      timeout={300}
      classNames="modal-backdrop-fade"
      unmountOnExit
      onEnter={() => setModalContent(true)}
    >
      <ModalBackdrop onClick={() => setModalContent(false)}>
        <CSSTransition
          in={showModalContent}
          timeout={300}
          classNames="modal-container-slide"
        >
          <ModalContent onClick={e => e.stopPropagation()}>
            {children}
          </ModalContent>
        </CSSTransition>
      </ModalBackdrop>
    </CSSTransition>
  );
};

export default Modal;
