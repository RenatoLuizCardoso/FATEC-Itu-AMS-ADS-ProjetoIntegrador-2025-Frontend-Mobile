import type { ReactNode } from 'react';
import { StyleSheet } from 'react-native';
import { Modal as PaperModal, Portal } from 'react-native-paper';

type ModalProps = {
  children: ReactNode;
  visible: boolean;
  onDismiss: () => void;
};

export function Modal({ children, onDismiss, visible }: ModalProps) {
  return (
    <Portal>
      <PaperModal
        visible={visible}
        onDismiss={onDismiss}
        contentContainerStyle={modal}
      >
        {children}
      </PaperModal>
    </Portal>
  );
}

const { modal } = StyleSheet.create({
  modal: {
    backgroundColor: 'white',
    alignItems: 'center',
    margin: '10%',
    padding: 24,
    borderRadius: 12,
  },
});
