import React from 'react';
import { Container, Header, Body, Footer } from './modal.skeleton';

type Props = {
  /**
   * Show or hide modal flag
   */
  show?: boolean;
  /**
   * Modal title
   */
  title?: React.ReactNode;
  /**
   * Modal content
   */
  footer?: React.ReactNode;
  /**
   * Modal content
   */
  content: React.ReactNode;
  /**
   * handler close
   */
  onClose: () => void;
};

/**
 * Modal UI component for user interaction
 */
const Modal = ({
  show = false,
  title = '',
  footer = '',
  content,
  onClose,
}: Props) => {
  return show ? (
    <Container>
      <Header className="pl-6">
        <div className="flex justify-between items-center">
          <h1>{title}</h1>
          <button
            onClick={onClose}
            className="px-[9px] rounded-full hover:bg-neutral-500"
          >
            x
          </button>
        </div>
      </Header>
      <Body className="p-6">{content}</Body>
      {footer && <Footer>{footer}</Footer>}
    </Container>
  ) : (
    <></>
  );
};

export default Modal;
