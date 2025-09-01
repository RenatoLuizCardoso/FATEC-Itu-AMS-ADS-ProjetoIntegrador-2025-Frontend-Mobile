import type { ReactNode } from 'react';
import { Modal as PaperModal, Portal } from 'react-native-paper';

type ModalProps = {
  children: ReactNode;
  visible: boolean;
  onDismiss: () => void;
};

export function Modal({ children, onDismiss, visible }: ModalProps) {
  return (
    <Portal>
      <PaperModal visible={visible} onDismiss={onDismiss}>
        {children}
      </PaperModal>
    </Portal>
  );
}
